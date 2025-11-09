# Circle — System Architecture

## Overview
Circle is a friendship maintenance app designed to help users track connections, remember context, and schedule gentle reminders to reach out. This document outlines the technical architecture for an initial MVP.

## Components
- Frontend: React (Vite) SPA
- Backend: REST API (Node.js + Express) or optionally FastAPI (Python)
- Database: PostgreSQL (primary), Redis (optional, for reminders / caching)
- Notifications: Email via transactional service (SendGrid) and push notifications via Web Push (VAPID)

## Frontend
- Built with React and Vite for fast dev builds.
- Pages: Home (friend list), Friend detail, Reminders, Settings, Onboarding.
- State: Local component state and React Context for auth/user; data fetched from backend via axios.
- Offline/optimistic updates: Use local cache (IndexedDB or localStorage) for last-contact timestamps when offline; sync when reconnected.

## Backend
- REST API with endpoints:
  - POST /auth/signup, POST /auth/login
  - GET /users/:id/friends
  - POST /users/:id/friends
  - PATCH /users/:id/friends/:friendId (update notes, lastContact)
  - POST /users/:id/reminders (schedule reminder)
- Authentication: JWT access tokens + refresh tokens stored in httpOnly cookies.
- Rate limiting and input validation using middleware.

## Database
- PostgreSQL with tables:
  - users (id, name, email, password_hash, created_at)
  - friends (id, user_id, name, notes, last_contact, contact_frequency)
  - reminders (id, user_id, friend_id, remind_at, status)
- Index on (user_id) for queries and on remind_at for scheduled jobs.

## Communication
- Frontend communicates with backend over HTTPS using JSON.
- Scheduled reminder worker (Node.js or Python) polls DB for due reminders and sends notifications via SendGrid or Web Push.
- For immediate push, backend will accept subscription objects from the frontend and store them tied to the user.

## Feasibility & Scaling
- Start with a single Node.js/Express instance and PostgreSQL. Scale by adding read replicas and moving caching to Redis.
- Use managed services (Heroku, Render, Railway, or AWS Elastic Beanstalk) for faster deployment.

## Security
- Store passwords hashed with bcrypt.
- Use HTTPS everywhere.
- Protect routes with JWT and validate inputs.

## Next Steps (backend)
1. Create backend repo with express generator, define DB schema and migrations.
2. Implement auth and friend endpoints with unit tests.
3. Add reminder worker, integrate SendGrid and Web Push.
4. Deploy to a staging environment and run end-to-end tests.
