# Vite + Svelte + TS + Tailwind

## Prerequisites

- **Visual Studio Code (VSC)**
- **Docker**: Install Docker Desktop or another Docker environment.
- A Docker image with **Node.js** installed (or Node.js locally for non-Docker setups).

## Setup instructions

### Create a new Docker Container with Node.js

1. Open Visual Studio Code.
2. In the bottom left corner find and open the **Remote Explorer menu** and select **New Dev Container**.
3. Search for and select `Node.js` (the `Node.js csutter` image).
4. Follow the prompts to create a new Docker container.
5. Once the container is created, open a terminal in VSC from **Terminal > New Terminal**.

### Clone the repository

Clone the repository and navigate to its directory.

```
git clone https://github.com/Nykare/FE-challenge-M
cd FE-challenge-M
```

Install the required dependencies for the project.

```
npm install
```
Run the development server.

```
npm run dev
```

### Recreating the project

To recreate this project from scratch, follow these steps.

#### Set up Vite with Svelte and TypeScript

Install Vite

```
npm install -D vite
npm create vite@latest
```

Choose Svelte and TypeScript support when prompted.

Enter the directory and install dependencies for the project.

```
cd vite-project
npm install
```

#### Tailwind

Install TailwindCSS and initialize it.

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add Tailwind's directives in your main stylesheet (e.g., `src/styles.css` or equivalent):

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Ensure your `tailwind.config.js` is properly configured for your file paths.

```
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

#### Navigation

For URL routing support install `svelte-spa-router`.

```
npm install svelte-spa-router
```
