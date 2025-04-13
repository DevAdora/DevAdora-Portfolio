// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx}', // Include your app files in src
    ],
    theme: {
      extend: {
        colors: {
          'brown': '#725843',
          'light-brown': '#9f7f65',
          'dark-gray': '#60564d',
          'white-brown': '#ccb4a0',
          'dark-brown': '#3a2a1d',
          'kendal-charcoal': '#686662',
          'white-dove': '#f0ede4',
          'wrought-iron': '#323333',
          'dark-black': '#1a1a17',
          'light-dark': '#78726a',
        },
        fontFamily: {
          'karla': ['Karla', 'sans-serif'],
          'dancing-script': ['"Dancing Script"', 'cursive'],
          'ibm-plex-sans': ['"IBM Plex Sans"', 'sans-serif'],
        },
        animation: {
          'fade-up': 'fade-up 1s ease-out',
          'spin': 'spin 2s linear infinite',
          'distort': 'distort 2s forwards',
          'appear': 'appear 1s forwards',
        },
        keyframes: {
          'fade-up': {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          'distort': {
            '0%': { transform: 'translateY(0)' },
            '100%': { transform: 'translateY(-100%)' },
          },
          'appear': {
            '0%': { opacity: '0', transform: 'translateY(-20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
      },
    },
    plugins: [],
  }