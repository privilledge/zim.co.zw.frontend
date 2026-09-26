# zim.co.zw - Frontend

React + TypeScript frontend for the Zimbabwe information and services portal.
It consumes the REST API provided by the Spring Boot backend in
`../zim.co.zw.backend`.

## Getting started

```bash
npm install
cp .env.example .env    # then set VITE_API_BASE_URL
npm run dev             # http://localhost:5173
```

## Scripts

| Command                | What it does                              |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Start the Vite dev server with hot reload |
| `npm run build`        | Type-check, then build to `dist/`         |
| `npm run preview`      | Serve the production build locally        |
| `npm run typecheck`    | Type-check only, no build output          |
| `npm run lint`         | Run ESLint                                |
| `npm run lint:fix`     | Run ESLint and fix what it can            |
| `npm run format`       | Format with Prettier                      |
| `npm run format:check` | Check formatting without writing          |

## Architecture

See [`../docs/frontend-architecture.md`](../docs/frontend-architecture.md) for
the folder structure, state-management split, API layer and design system.
