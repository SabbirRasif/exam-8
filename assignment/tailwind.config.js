import('tailwindcss').Config
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    ('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#7C3AED", 
          "secondary": "#F97316", 
          "accent": "#FACC15", 
          "neutral": "#374151",
          "base-100": "#FFFFFF",
          "info": "#3B82F6",
          "success": "#10B981",
          "warning": "#F59E0B",
          "error": "#EF4444",
        },
      },
      "light",
    ],
  },
}