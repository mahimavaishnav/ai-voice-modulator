# AI Voice Modulator

A TypeScript-based frontend for an AI-powered media generation platform, providing interfaces for speech synthesis, voice management, video generation, and clip creation.

## Overview

AI Voice Modulator is structured as a modular client application around multiple media-generation workflows.

The frontend separates authentication, application navigation, media workflows, API communication, and reusable interface primitives into distinct layers.

## Architecture

The application uses React Router for application-level routing with protected routes for authenticated media workflows.

Feature modules are lazy-loaded to reduce the initial application payload and isolate route-specific dependencies.

```text
Application Shell
│
├── Authentication
│   ├── Login
│   └── Registration
│
├── Protected Application
│   ├── Voices
│   ├── Speech
│   ├── Videos
│   └── Clip Generation
│
├── Shared UI
│   ├── Navigation
│   ├── Forms
│   ├── Tables
│   └── Interactive Components
│
└── API / Application State

## Running locally

```bash
npm install
npm run dev            # http://localhost:5173
npm run build:production
npm run lint
npm run preview
```

`npm run dev` and `npm run build:production` load their variables through
`env-cmd`, so `.env.development` / `.env.production` must exist. Copy
`.env.example` and set `VITE_API_URL` (the backend base URL). Both env files are
gitignored.

## The `frontend` branch

UI-only branch. No backend calls are made from any routed screen.

| Route       | Screen                         | Data                                   |
| ----------- | ------------------------------ | -------------------------------------- |
| `/`         | Landing page + video showcase  | static, plays the sample demo media    |
| `/videos`   | Video gallery                  | static rows, playable sample videos    |
| `/voices`   | Voice Lab                      | static voices, playable sample audio   |
| `/speech`   | Speech history                 | static table rows                      |
| `/clips`    | Generate Content               | simulated generation with demo preview |
| `/login`    | Login form                     | mocked store, no request               |
| `/register` | Sign up form                   | mocked store, no request               |

The `ProtectedRoute` auth gate is not used on this branch, so every screen is
reachable without signing in. Data that came from the API is rendered from
static mock data instead. The old store and service files remain in the
repository but are not imported by any routed screen.
