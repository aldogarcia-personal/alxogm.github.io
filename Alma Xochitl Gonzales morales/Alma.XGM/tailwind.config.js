/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        '0056B3': '#0056B3',
        f5f5dc: '#f5f5dc',
        '343A40': '#343A40',
        '00449B': '#00449B',
        'gray-dark': '#1f2937', // Color gris oscuro para el modo oscuro
        'gray-light': '#f3f4f6', // Color gris claro para el fondo
        'nav-light': '#e2e8f0', // Color claro para el fondo del nav
        'nav-dark': '#2d3748', // Color oscuro para el fondo del nav
        'nav-blue': '#1f2A44', // Color claro para el texto
        'nav-logo': '#7C4DFF',
        'nav-link': '#f5f5f5',
        'nav-hover': '#00b0ff'
      }
    }
  },
  darkMode: 'class', // o 'media' si prefieres el modo oscuro basado en las preferencias del sistema
  plugins: []
}
