/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08080a',
          900: '#0c0c0f',
          800: '#121215',
          700: '#1a1a1f',
          600: '#242429',
          500: '#33333a',
          400: '#4a4a52',
          300: '#6b6b75',
          200: '#9a9aa3',
          100: '#c4c4cc',
        },
        cream: {
          DEFAULT: '#f5f0e6',
          50: '#faf8f3',
          100: '#f5f0e6',
          200: '#e8e1d0',
          300: '#d4cab2',
        },
        gold: {
          50: '#fbf6e8',
          100: '#f5ead0',
          200: '#ecd9a6',
          300: '#e0c478',
          400: '#d4af37',
          500: '#c39a2e',
          600: '#a87d22',
          700: '#85621b',
          800: '#5f4713',
        },
        chrome: {
          100: '#e8e8ea',
          200: '#c8c8cc',
          300: '#a0a0a5',
          400: '#7a7a80',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212,175,55,0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(212,175,55,0)' },
        },
      },
    },
  },
  plugins: [],
};
