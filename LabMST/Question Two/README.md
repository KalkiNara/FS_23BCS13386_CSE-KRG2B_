# Student Registration Form

A React application with a form and table using Tailwind CSS for styling.

## Features

- **Form Input**: Accepts Name, Email, and Course
- **State Management**: Stores form data in React state
- **Dynamic Table**: Displays all submitted entries in a responsive table
- **Modern UI**: Built with Tailwind CSS for a clean, professional look
- **Form Validation**: Ensures all fields are filled before submission
- **Responsive Design**: Works on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Usage

1. Fill in the form with student details (Name, Email, Course)
2. Click "Add Student" to submit the form
3. View all registered students in the table below
4. The table shows a count of total registered students
5. Each entry is numbered sequentially

## Technologies Used

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server
- **JavaScript**: ES6+ features

## Project Structure

```
├── src/
│   ├── App.jsx          # Main React component
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind CSS imports
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```
