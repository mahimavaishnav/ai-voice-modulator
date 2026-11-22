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

| Route     | Screen                    | Data                     |
| --------- | ------------------------- | ------------------------ |
| `/`       | Landing page              | static                   |
| `/videos` | Video gallery             | static placeholder rows  |
| `/login`  | Login form                | mocked store, no request |
| `/register` | Sign up form            | mocked store, no request |

The Voices, Speech and Generate Clips routes were removed for now, along with the
`ProtectedRoute` auth gate, so every screen is reachable without signing in.
Their page, component, store and service files are still in the repository -
they are simply not routed, so nothing imports them and no request is made. Data
that came from the API is rendered from static placeholders instead.
