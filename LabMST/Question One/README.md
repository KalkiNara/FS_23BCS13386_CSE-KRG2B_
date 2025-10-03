# Simple React Router Demo

A minimal React application demonstrating the fundamentals of React Router with Tailwind CSS.

## Features

- **Client-side Routing**: Navigate between pages without full page reloads
- **Three Pages**: Home, About, and Contact pages
- **Navigation**: Active link highlighting
- **Responsive Design**: Works on desktop and mobile
- **Modern UI**: Clean styling with Tailwind CSS

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser** to `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   └── Navigation.js          # Navigation with active states
├── pages/
│   ├── Home.js               # Home page
│   ├── About.js              # About page
│   └── Contact.js            # Contact page with form
├── App.js                    # Main app with routing
├── index.js                  # Entry point
└── index.css                 # Tailwind CSS
```

## Technologies

- React 18.2.0
- React Router DOM 6.8.1
- Tailwind CSS 3.3.0
- Create React App

## Pages

- **Home**: Welcome page with feature overview
- **About**: Project information and technologies
- **Contact**: Contact form and information

## Learning Objectives

This app demonstrates:
- React Router setup and configuration
- Route components and navigation
- Active link highlighting
- Form handling with React hooks
- Tailwind CSS styling
- Responsive design principles