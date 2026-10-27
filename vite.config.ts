// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  vite: {
    base: isGitHubPagesBuild ? "/portfolio-2026/" : "/",
  },
  nitro: isGitHubPagesBuild ? { preset: "cloudflare-module" } : undefined,
  tanstackStart: {
    ...(isGitHubPagesBuild ? { router: { basepath: "/portfolio-2026" } } : {}),
    ...(isGitHubPagesBuild
      ? {
          prerender: {
            enabled: true,
            crawlLinks: true,
            failOnError: true,
            autoStaticPathsDiscovery: false,
            filter: ({ path }) => !path.includes("/assets/"),
          },
          pages: [{ path: "/portfolio-2026/" }],
        }
      : {}),
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
