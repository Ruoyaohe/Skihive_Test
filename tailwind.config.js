/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#857EEE', // rgb(133, 94, 238)
          400: '#887EEB', // rgb(136, 94, 235)
          500: '#B15BE6', // rgb(177, 91, 230)
          600: '#C7BCE3', // rgb(199, 188, 227)
        },
        dark: {
          DEFAULT: '#000000', // rgb(0, 0, 0)
          button: '#222222', // rgb(34, 34, 34)
          card: '#383838', // rgb(56, 56, 56)
          border: '#333333', // rgb(51, 51, 51)
          borderLight: '#686868', // rgb(104, 104, 104)
        },
        gray: {
          light: '#D5D3D3', // rgb(213, 211, 211)
          DEFAULT: '#B2B2B2', // rgb(178, 178, 178)
          dark: '#7D7D7D', // rgb(125, 125, 125)
        },
      },
      fontFamily: {
        sans: ['PingFang SC', 'SF Pro Text', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

