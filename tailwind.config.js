/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./courses.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f6f2ea",
        ink: "#202124",
        accent: "#b9412e",
        pine: "#124036",
        line: "#dfd5c4"
      },
      fontFamily: {
        display: ["Lora", "Georgia", "serif"],
        body: ["Source Sans 3", "Segoe UI", "sans-serif"],
        mono: ["IBM Plex Mono", "Consolas", "monospace"]
      },
      boxShadow: {
        card: "0 18px 50px -32px rgba(26, 38, 35, 0.35)"
      }
    }
  },
  plugins: []
};
