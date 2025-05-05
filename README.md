# Todo Apps: React + Vite + Tailwind + Bun

A modern and efficient Todo application built with React, Vite, Tailwind CSS, and powered by the Bun.js runtime.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

This project serves as a demonstration of building a performant web application using a modern frontend stack. It provides a clean user interface for managing tasks, showcasing the integration of:

- **React:** For building dynamic and component-based user interfaces.
- **Vite:** For an extremely fast development server and optimized production builds.
- **Tailwind CSS:** For rapid UI development with a utility-first approach.
- **Bun.js:** As the fast JavaScript runtime, package manager, and bundler.

## Features

- Create, Read, Update, Delete (CRUD) operations for tasks.
- Clean, responsive user interface.
- Efficient state management.
- Fast development experience and optimized builds.

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Runtime & Package Manager:** Bun.js
- **Language:** TypeScript (optional, setup for JS currently)

## Getting Started

### Prerequisites

Ensure you have [Bun.js](https://bun.sh/) installed on your system.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url> # Replace <repository-url> with the actual URL
    cd todo-apps
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

### Development

To start the development server:

```bash
bun run dev
```

This command utilizes `bunx --bun vite` as defined in `package.json` to launch the Vite development server, typically available at `http://localhost:5173`.

### Building for Production

To create an optimized production build:

```bash
bun run build
```

This command uses `bunx --bun vite build` to bundle the application into the `dist/` directory.

### Previewing the Production Build

To preview the production build locally:

```bash
bun run preview
```

This command uses `bunx --bun vite preview` to serve the contents of the `dist/` directory.

## Project Structure

```
/todo-apps
├── public/             # Static assets
├── src/                # Application source code
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable React components
│   ├── App.jsx         # Main application component
│   └── index.css       # Main CSS file (includes Tailwind)
│   └── main.jsx        # Application entry point
├── .eslintrc.cjs       # ESLint configuration
├── .gitignore          # Git ignore rules
├── index.html          # HTML entry point for Vite
├── package.json        # Project metadata and dependencies
├── bun.lockb           # Bun lockfile
├── postcss.config.js   # PostCSS configuration (for Tailwind)
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## Deployment

This project includes configuration for deploying to GitHub Pages:

```bash
bun run deploy
```

This script (`gh-pages -d dist`) requires the `gh-pages` package and appropriate repository setup.

## Live Demo

Check out the live version: [Todo Apps Live Demo](https://pankaj72885.github.io/todo-apps/)

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file (if one exists) or the [MIT License text](https://opensource.org/licenses/MIT) for details.
