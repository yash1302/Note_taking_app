/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'auto': 'repeat(auto-fit, minmax(250px, 1fr))',

        
      }
    },
  },
  plugins: [],
}

