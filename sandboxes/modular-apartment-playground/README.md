# Modular Apartment Playground

A Blazor WebAssembly sandbox for experimenting with a full-width 3D viewport. The first scene renders a rotating colored cube with browser-native WebGPU and uses Fluent UI Blazor for its controls.

## Run locally

Requires the .NET 10 SDK and a browser with WebGPU enabled. From the repository root:

```sh
dotnet run --project sandboxes/modular-apartment-playground/ModularApartmentPlayground.csproj
```

WebGPU is available only in supported browsers and secure contexts, such as `localhost` or HTTPS. The page reports when WebGPU cannot be initialized.

The sandbox uses a per-sandbox GitHub Actions workflow for build validation. Publishing is intentionally separate; see [Q-008](../../docs/OPEN_QUESTIONS.md).
