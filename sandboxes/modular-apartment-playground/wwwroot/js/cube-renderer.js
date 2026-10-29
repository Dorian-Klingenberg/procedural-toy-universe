let activeDevice;
let currentStatus = "WebGPU is starting…";

function setStatus(message) {
    currentStatus = message;
    return false;
}

export async function start() {
    if (!navigator.gpu) {
        return setStatus("WebGPU is not available in this browser.");
    }

    try {
        const adapter = await navigator.gpu.requestAdapter();
        if (!adapter) {
            return setStatus("WebGPU is available, but no adapter could be requested.");
        }

        activeDevice = await adapter.requestDevice();
        activeDevice.lost.then((info) => {
            if (activeDevice) {
                currentStatus = `WebGPU device lost: ${info.message || "unknown reason"}`;
                activeDevice = undefined;
            }
        });
        currentStatus = "WebGPU device initialized";
        return true;
    } catch (error) {
        return setStatus(`WebGPU initialization failed: ${error.message || "unknown error"}`);
    }
}

export function getStatus() {
    return activeDevice ? "WebGPU device initialized" : currentStatus;
}

export function setPaused() {
}

export function beginPlacement() {
    return false;
}

export function rotatePlacement() {
    return false;
}

export function placeSelectedWall() {
    return -1;
}

export function addWall() {
    return -1;
}

export function updateWall() {
    return false;
}

export function removeWall() {
    return false;
}

export function stop() {
    activeDevice?.destroy();
    activeDevice = undefined;
}
