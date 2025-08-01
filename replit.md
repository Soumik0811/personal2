# Happy GF Day Interactive Application

## Project Overview
This is a personal interactive web application built for celebrating "Happy GF Day" featuring multiple interactive sections including quizzes, photo galleries, and music playlists.

## Project Architecture
- **Frontend**: React 18 with TypeScript
- **Backend**: Express.js server
- **Styling**: Tailwind CSS with custom gradients and animations
- **Build Tool**: Vite
- **Routing**: Wouter for client-side routing
- **State Management**: React useState hooks

## Current Features
1. **Landing Page**: Welcome screen with navigation to different sections
2. **Interactive Quiz**: Personal quiz with key collection system that unlocks the gallery
3. **Photo Gallery**: Memory gallery with categorized photos (modified to show all images directly)
4. **Music Playlist**: YouTube-integrated playlist with personal songs and meanings

## Project Structure
```
client/src/
├── App.tsx - Main application with navigation and state management
├── components/
│   ├── LandingPage.tsx - Welcome screen
│   ├── Quiz.tsx - Interactive quiz component
│   ├── Gallery.tsx - Photo gallery (recently updated)
│   └── Playlist.tsx - Music player with YouTube integration
├── main.tsx - Application entry point
└── index.css - Global styles

server/
├── index.ts - Express server setup
├── routes.ts - API routes (minimal backend needed)
├── storage.ts - In-memory storage interface
└── vite.ts - Vite development server integration

shared/
└── schema.ts - Shared TypeScript types and Zod schemas
```

## Recent Changes
- **2025-08-01**: Migrated project from Bolt to Replit environment
- **2025-08-01**: Updated Gallery component to display all images immediately without requiring category clicks
- **2025-08-01**: Set up proper client/server separation with Express.js backend
- **2025-08-01**: Updated Gallery to use personal Google Drive images with proper direct viewing URLs

## Security & Architecture Notes
- Client/server separation implemented for security
- Using in-memory storage (no database required for this personal project)
- All API routes prefixed with /api
- Proper TypeScript typing throughout the application

## User Preferences
- Display all gallery images immediately without category navigation
- Personal, romantic theme with colorful gradients and animations
- Interactive elements with hover effects and transitions

## Development
- Run `npm run dev` to start development server
- Application serves on port 5000 with both frontend and backend
- Hot reloading enabled for development