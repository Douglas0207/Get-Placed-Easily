# Overview

This is a full-stack web application built with React and Express that provides educational and career development tools. The application includes features for test generation, resume building, interview preparation, spoken English practice, progress tracking, and certifications. It follows a modern monorepo structure with a React frontend using shadcn/ui components and an Express backend with PostgreSQL database integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming (light/dark mode support)
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Session Management**: In-memory storage with abstraction layer for future database integration
- **Development**: Hot reloading with tsx, production builds with esbuild
- **API Design**: RESTful endpoints prefixed with `/api`

## Project Structure
- **Monorepo Layout**: Client, server, and shared code in separate directories
- **Client**: React application in `client/` directory
- **Server**: Express backend in `server/` directory  
- **Shared**: Common types and schemas in `shared/` directory for type safety across frontend and backend

## Data Layer
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Centralized schema definitions in `shared/schema.ts`
- **Migrations**: Managed through Drizzle Kit
- **Storage Abstraction**: Interface-based storage layer allowing for easy switching between in-memory and database storage

## Development Workflow
- **Type Safety**: Full TypeScript coverage across client, server, and shared code
- **Path Aliases**: Configured for clean imports (`@/`, `@shared/`)
- **Hot Reloading**: Vite for frontend, tsx for backend development
- **Build Process**: Separate build steps for client (Vite) and server (esbuild)

## UI/UX Architecture
- **Component System**: Consistent design system using shadcn/ui
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Theme System**: CSS custom properties enabling light/dark theme switching
- **Accessibility**: Built on Radix UI primitives ensuring WCAG compliance

# External Dependencies

## Database
- **PostgreSQL**: Primary database with connection via DATABASE_URL environment variable
- **Neon Database**: Serverless PostgreSQL provider (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect

## UI Framework
- **Radix UI**: Comprehensive suite of accessible React components
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Carousel/slider functionality

## Development Tools
- **Vite**: Frontend build tool and development server
- **esbuild**: Fast JavaScript bundler for server builds
- **TypeScript**: Static type checking across the entire codebase
- **Replit Integration**: Development environment with runtime error overlay and cartographer plugins

## Runtime Libraries
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation for type-safe data handling
- **date-fns**: Date manipulation utilities
- **clsx + Tailwind Merge**: Conditional CSS class handling