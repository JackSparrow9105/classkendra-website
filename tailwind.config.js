/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        whatsapp: { DEFAULT: '#25D366', dark: '#075E54', chat: '#ECE5DD', bubble: '#DCF8C6' },
      },
    },
  },
  plugins: [],
};
