# Riley Hammond | Portfolio

The source for Riley Hammond's portfolio website, built with React, TanStack Start, and Vite.

## Local development

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
```

The standard build uses the project's configured Nitro deployment target. GitHub Pages is
deployed separately as a static site by the workflow in
`.github/workflows/deploy.yml`. It prerenders the site with the repository base path
`/portfolio-2026/` and publishes `.output/public` when changes are pushed to `main`.

The repository's GitHub Pages setting must use **GitHub Actions** as its build and deployment
source.
