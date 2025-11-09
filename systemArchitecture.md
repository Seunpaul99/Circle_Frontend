# Circle System Architecture

## Current state (implemented)
This repository contains a frontend-only demo of Circle. The codebase implements a React + Vite single-page application (SPA) that demonstrates the UI and user flows with mock data. There is no backend, no persistent database, and no external notification integration in this workspace.

## Implemented components (what's actually available)
- Frontend stack:
  - React + Vite (dev scripts in Circle_Frontend/package.json)
  - Dependencies present: react, react-dom, axios (installed), vite, @vitejs/plugin-react (dev)
- UI features implemented in code:
  - Friend list view (Home page)
  - FriendCard components showing name and last-contact info
  - Basic actions in the UI such as "Remind me" and "Message" (UI-only; use mock handlers)
- Project files present:
  - src/ (React source files)
  - index.html (Vite entry)
  - Circle_Frontend/package.json (scripts and deps)
  - Circle_Frontend/README.md (run instructions and feature notes)
- State & data:
  - Local component state and mock data (no persistent storage)
  - No authentication flows implemented

## Not implemented (what is missing in this repo)
- No backend API (no implemented Express/FastAPI server)
- No database or persistence (no PostgreSQL schema/migrations)
- No authentication, JWTs, or secure cookies
- No scheduled reminder worker, email, or push notification integrations
- Any axios usage in the codebase is currently for local/mocked data or placeholders

## Communication & runtime behavior
- The frontend currently operates offline relative to a production API: it uses in-memory or mock data and does not persist changes across reloads.
- Network calls to a real API are not implemented; to connect to a backend the frontend must be updated to point axios calls at real endpoints and handle auth.

## How to get this running locally
1. cd Circle_Frontend
2. npm install
3. npm run dev

## Recommended next steps to complete the architecture
- Create a backend repository (Node/Express or FastAPI) implementing the planned REST endpoints.
- Add PostgreSQL for data persistence and migrations.
- Replace mock data in the frontend with real API calls (axios) and implement auth.
- Implement a reminder worker and integrate email / web-push services.
- Add end-to-end tests and CI/CD once backend and persistence are in place.
