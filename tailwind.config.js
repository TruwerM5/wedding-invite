/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto'],
        'lora': ['Lora'],
        'vibes': ['Great Vibes'],
        'kurale': ['Kurale']
      }
    },
  },
  plugins: [],
}

