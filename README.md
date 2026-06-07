# LuxDine

A React + Vite restaurant landing page and demo application built in `restaurant-app`.

## Overview

`LuxDine` is a boutique restaurant web app that showcases a premium dining experience with:

- responsive hero and landing page sections
- authentication demo with login, registration, guest access, and protected routing
- styled components using Tailwind CSS and inline styles
- animated icons using LordIcon
- client-side state persistence via localStorage

This project is built inside the `restaurant-app` folder.

## What has been done so far

### Core application files

- `restaurant-app/package.json`
  - React 19, React Router DOM, Tailwind CSS, ESLint, Vite, date-fns, lord-icon-element, and lottie-web dependencies.

- `restaurant-app/vite.config.js`
  - Vite configuration with the React SWC plugin.

- `restaurant-app/postcss.config.js`
  - PostCSS setup for Tailwind CSS and Autoprefixer.

- `restaurant-app/tailwind.config.js`
  - Tailwind content scanning configuration and custom brand color theme for the LuxDine design.

### Application entry points

- `restaurant-app/src/main.jsx`
  - Registers the LordIcon custom element.
  - Wraps the app with `BrowserRouter` and `AuthProvider`.
  - Mounts the root React application.

- `restaurant-app/src/App.jsx`
  - Defines the main application routes.
  - Includes `Navbar`, the protected home route, and the authentication route.
  - Redirects all unknown routes back to `/`.

### Authentication

- `restaurant-app/src/context/AuthContext.jsx`
  - Provides authentication state and actions using React Context.
  - Persists demo auth state in `localStorage`.
  - Supports login, registration, guest mode, and logout.

### Pages

- `restaurant-app/src/pages/Home.jsx`
  - The main landing page with hero, about, discounts, what’s new, gallery, and contact sections.

- `restaurant-app/src/pages/AuthPage.jsx`
  - Displays the authentication card.
  - Redirects authenticated or guest users to the home page.

- `restaurant-app/src/pages/Login.jsx`
  - A standalone login page layout.
  - Includes email and password fields and guest view action.

- `restaurant-app/src/pages/Registration.jsx`
  - A standalone registration page layout.
  - Includes username, email, and password fields.

### Components

- `restaurant-app/src/components/Navbar.jsx`
  - Primary header navigation with auth actions.
  - Uses LordIcon for animated nav icons.

- `restaurant-app/src/components/LordIcon.jsx`
  - React wrapper component that renders the `<lord-icon>` custom element.

- `restaurant-app/src/components/Hero.jsx`
  - Hero section with headline, CTA buttons, image stack, and embedded `AuthCard`.

- `restaurant-app/src/components/AuthCard.jsx`
  - Login/register card with form state handling.
  - Supports switching between login and registration.
  - Includes guest access.

- `restaurant-app/src/components/About.jsx`
  - About section with restaurant story and brand description.

- `restaurant-app/src/components/Discounts.jsx`
  - Discounts section showing offer cards with mock promo data.

- `restaurant-app/src/components/WhatsNew.jsx`
  - New menu or features section for the landing page.

- `restaurant-app/src/components/Footer.jsx`
  - Footer content with links, contact info, and social icons.

- `restaurant-app/src/components/Header.jsx`
  - A sticky header variant with responsive navigation and mobile menu support.

- `restaurant-app/src/components/HeroImageStack.jsx`
  - Decorative image stack layout for the hero.

### Styling and assets

- `restaurant-app/src/index.css`
  - Global CSS importing Tailwind and base styles.

- `restaurant-app/src/App.css`
  - App-level styling.

- `restaurant-app/src/responsive.css`
  - Responsive rules and layout adjustments.

- `restaurant-app/public/`
  - Static assets and image files used by the app.

## How to run the project

1. Open the terminal in `restaurant-app`:
   ```bash
   cd restaurant-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the shown local URL to view the app.

## Notes

- The authentication flow is a demo and uses `localStorage` for persistence.
- `AuthCard` is the active login/register UI, while `Login.jsx` and `Registration.jsx` are additional page layouts.
- The home page uses protected routing so only logged-in or guest users can access it.

## File structure summary

- `restaurant-app/`
  - `index.html`
  - `package.json`
  - `vite.config.js`
  - `postcss.config.js`
  - `tailwind.config.js`
  - `src/`
    - `main.jsx`
    - `App.jsx`
    - `context/AuthContext.jsx`
    - `components/`
      - `About.jsx`
      - `AuthCard.jsx`
      - `Discounts.jsx`
      - `Footer.jsx`
      - `Header.jsx`
      - `Hero.jsx`
      - `HeroImageStack.jsx`
      - `LordIcon.jsx`
      - `Navbar.jsx`
      - `WhatsNew.jsx`
    - `pages/`
      - `AuthPage.jsx`
      - `Home.jsx`
      - `Login.jsx`
      - `Registration.jsx`
    - `App.css`
    - `index.css`
    - `responsive.css`
  - `public/`

---

This README now documents the current state of the LuxDine restaurant app and the work completed across each source file.