let activeRenderer;

const wallComponents = {
    plain: { color: [0.63, 0.68, 0.76] },
    window: { color: [0.35, 0.72, 0.88], feature: [0.12, 0.58, 0.78] },
    door: { color: [0.72, 0.52, 0.3], feature: [0.28, 0.14, 0.08] },
};

const wallInstances = [
    { type: "plain", position: [0, 1.25, -1.5], size: [4, 2.5, 0.2] },
    { type: "window", position: [-2, 1.25, 0], size: [0.2, 2.5, 3] },
    { type: "plain", position: [2, 1.25, 0], size: [0.2, 2.5, 3] },
    { type: "door", position: [0, 1.25, 1.5], size: [4, 2.5, 0.2] },
];

function addBox(vertices, center, size, color) {
    const [x, y, z] = center;
    const [width, height, depth] = size;
    const corners = [
        [x - width / 2, y - height / 2, z + depth / 2],
        [x + width / 2, y - height / 2, z + depth / 2],
        [x + width / 2, y + height / 2, z + depth / 2],
        [x - width / 2, y + height / 2, z + depth / 2],
        [x + width / 2, y - height / 2, z - depth / 2],
        [x - width / 2, y - height / 2, z - depth / 2],
        [x - width / 2, y + height / 2, z - depth / 2],
        [x + width / 2, y + height / 2, z - depth / 2],
    ];
    const faces = [
        [0, 1, 2, 0, 2, 3], [4, 5, 6, 4, 6, 7],
        [3, 2, 7, 3, 7, 6], [0, 4, 7, 0, 7, 3],
        [1, 5, 6, 1, 6, 2], [0, 1, 5, 0, 5, 4],
    ];
    for (const index of faces.flat()) {
        vertices.push(...corners[index], ...color);
    }
}

function createApartmentVertices() {
    const vertices = [];
    for (const wall of wallInstances) {
        const component = wallComponents[wall.type];
        addBox(vertices, wall.position, wall.size, component.color);
        if (component.feature) {
            const featureSize = wall.type === "door" ? [0.9, 1.8, 0.04] : [1.3, 1.1, 0.04];
            const featurePosition = wall.type === "door"
                ? [wall.position[0], 1, wall.position[2] + 0.12]
                : [wall.position[0] + 0.12, 1.5, wall.position[2]];
            addBox(vertices, featurePosition, featureSize, component.feature);
        }
    }
    addBox(vertices, [0, 0, 0], [4, 0.1, 3], [0.38, 0.42, 0.5]);
    return new Float32Array(vertices);
}

const apartmentVertices = createApartmentVertices();

const shaderCode = `
struct Uniforms {
    angle: f32,
    aspect: f32,
    padding: vec2<f32>,
};

@group(0) @binding(0) var<uniform> uniforms: Uniforms;

struct VertexInput {
    @location(0) position: vec3<f32>,
    @location(1) color: vec3<f32>,
};

struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) color: vec3<f32>,
};

@vertex
fn vertexMain(input: VertexInput) -> VertexOutput {
    let angleX = 0.55;
    let cosineX = cos(angleX);
    let sineX = sin(angleX);
    let rotatedX = vec3<f32>(
        input.position.x,
        input.position.y * cosineX - input.position.z * sineX,
        input.position.y * sineX + input.position.z * cosineX
    );

    let cosineY = cos(uniforms.angle);
    let sineY = sin(uniforms.angle);
    let rotated = vec3<f32>(
        rotatedX.x * cosineY + rotatedX.z * sineY,
        rotatedX.y,
        -rotatedX.x * sineY + rotatedX.z * cosineY
    );

    let nearPlane = 0.1;
    let farPlane = 100.0;
    let distance = 4.2 - rotated.z;
    let focalLength = 1.7;

    var output: VertexOutput;
    output.position = vec4<f32>(
        rotated.x * focalLength / uniforms.aspect,
        rotated.y * focalLength,
        farPlane / (farPlane - nearPlane) * (distance - nearPlane),
        distance
    );
    output.color = input.color;
    return output;
}

@fragment
fn fragmentMain(input: VertexOutput) -> @location(0) vec4<f32> {
    return vec4<f32>(input.color, 1.0);
}`;

export async function start(canvas) {
    if (!navigator.gpu) {
        return setStatus("WebGPU is not available in this browser. Try a compatible browser on localhost or HTTPS.");
    }

    try {
        const adapter = await navigator.gpu.requestAdapter();
        if (!adapter) {
            return setStatus("No WebGPU adapter is available on this device.");
        }

        const device = await adapter.requestDevice();
        const context = canvas.getContext("webgpu");
        if (!context) {
            device.destroy();
            return setStatus("Could not create a WebGPU canvas context.");
        }

        const format = navigator.gpu.getPreferredCanvasFormat();
        context.configure({ device, format, alphaMode: "opaque" });

        const shader = device.createShaderModule({ code: shaderCode });
        const shaderDiagnostics = await shader.getCompilationInfo();
        if (shaderDiagnostics.messages.some((message) => message.type === "error")) {
            device.destroy();
            return setStatus("The WebGPU apartment shader could not be compiled.");
        }

        const pipeline = await device.createRenderPipelineAsync({
            layout: "auto",
            vertex: {
                module: shader,
                entryPoint: "vertexMain",
                buffers: [{
                    arrayStride: 24,
                    attributes: [
                        { shaderLocation: 0, offset: 0, format: "float32x3" },
                        { shaderLocation: 1, offset: 12, format: "float32x3" },
                    ],
                }],
            },
            fragment: {
                module: shader,
                entryPoint: "fragmentMain",
                targets: [{ format }],
            },
            primitive: { topology: "triangle-list" },
            depthStencil: { format: "depth24plus", depthWriteEnabled: true, depthCompare: "less" },
        });

        const vertexBuffer = device.createBuffer({
            size: apartmentVertices.byteLength,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
        });
        device.queue.writeBuffer(vertexBuffer, 0, apartmentVertices);

        const uniformBuffer = device.createBuffer({
            size: 16,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });
        const bindGroup = device.createBindGroup({
            layout: pipeline.getBindGroupLayout(0),
            entries: [{ binding: 0, resource: { buffer: uniformBuffer } }],
        });

        let depthTexture;
        let animationFrame;
        let paused = false;
        let startTime;
        let disposed = false;
        const uniforms = new Float32Array(4);

        function resize() {
            const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
            const width = Math.max(1, Math.round(canvas.clientWidth * pixelRatio));
            const height = Math.max(1, Math.round(canvas.clientHeight * pixelRatio));
            if (canvas.width === width && canvas.height === height && depthTexture) {
                return;
            }

            canvas.width = width;
            canvas.height = height;
            depthTexture?.destroy();
            depthTexture = device.createTexture({
                size: [width, height],
                format: "depth24plus",
                usage: GPUTextureUsage.RENDER_ATTACHMENT,
            });
        }

        function render(timestamp) {
            if (disposed) {
                return;
            }

            resize();
            startTime ??= timestamp;
            uniforms[0] = paused ? uniforms[0] : (timestamp - startTime) * 0.00045;
            uniforms[1] = canvas.width / canvas.height;
            device.queue.writeBuffer(uniformBuffer, 0, uniforms);

            const commandEncoder = device.createCommandEncoder();
            const pass = commandEncoder.beginRenderPass({
                colorAttachments: [{
                    view: context.getCurrentTexture().createView(),
                    clearValue: { r: 1, g: 1, b: 1, a: 1 },
                    loadOp: "clear",
                    storeOp: "store",
                }],
                depthStencilAttachment: {
                    view: depthTexture.createView(),
                    depthClearValue: 1,
                    depthLoadOp: "clear",
                    depthStoreOp: "store",
                },
            });
            pass.setPipeline(pipeline);
            pass.setBindGroup(0, bindGroup);
            pass.setVertexBuffer(0, vertexBuffer);
            pass.draw(apartmentVertices.length / 6);
            pass.end();
            device.queue.submit([commandEncoder.finish()]);

            animationFrame = requestAnimationFrame(render);
        }

        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(canvas);
        activeRenderer = {
            dispose() {
                if (disposed) {
                    return;
                }

                disposed = true;
                cancelAnimationFrame(animationFrame);
                resizeObserver.disconnect();
                depthTexture?.destroy();
                uniformBuffer.destroy();
                vertexBuffer.destroy();
                device.destroy();
            },
            setPaused(value) {
                if (paused && !value) {
                    startTime = performance.now() - uniforms[0] / 0.00045;
                }

                paused = value;
            },
        };
        device.lost.then(() => {
            if (activeRenderer?.dispose) {
                activeRenderer.dispose();
                activeRenderer = undefined;
            }
        });

        animationFrame = requestAnimationFrame(render);
        currentStatus = "WebGPU ready · modular room";
        return true;
    } catch {
        return setStatus("WebGPU initialization failed. Try a compatible browser on localhost or HTTPS.");
    }
}

export function getStatus() {
    return activeRenderer ? "WebGPU ready · modular room" : currentStatus;
}

let currentStatus = "WebGPU is starting…";

function setStatus(message) {
    currentStatus = message;
    return false;
}

export function setPaused(paused) {
    activeRenderer?.setPaused(paused);
}

export function stop() {
    activeRenderer?.dispose();
    activeRenderer = undefined;
}
