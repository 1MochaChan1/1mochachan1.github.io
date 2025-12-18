module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        synthwave: {
          magenta: '#f72585',
          cyan: '#22d3ee',
          purple: '#3a2357',
          horrorRed: '#c9184a',
          dark: '#181824',
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'Orbitron', 'monospace'],
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        horror: '0 4px 24px 2px #c9184a55',
        synthGlow: '0 0 16px #22d3ee, 0 0 16px #f72585',
      },
      borderWidth: {
        '3': '3px',
      },
    }
  },
  plugins: [],
}
