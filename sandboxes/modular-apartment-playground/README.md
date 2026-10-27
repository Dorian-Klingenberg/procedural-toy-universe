# Modular Apartment Playground

A Blazor WebAssembly sandbox for experimenting with a full-width 3D viewport. The first scene renders a rotating room assembled from interchangeable plain, window, and door wall components with browser-native WebGPU and uses Fluent UI Blazor for its controls.

## Run locally

Requires the .NET 10 SDK and a browser with WebGPU enabled. From the repository root:

```sh
dotnet run --project sandboxes/modular-apartment-playground/ModularApartmentPlayground.csproj
```

WebGPU is available only in supported browsers and secure contexts, such as `localhost` or HTTPS. The page reports when WebGPU cannot be initialized.

The sandbox uses a per-sandbox GitHub Actions workflow for build validation. Publishing is intentionally separate: run the repository's **Publish modular apartment playground** workflow manually from the Actions tab when you want to update the GitHub Pages site. The repository's Settings → Pages → Build and deployment source must be set to **GitHub Actions** once before the first deployment.
