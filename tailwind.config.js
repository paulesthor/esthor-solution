/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        fond: '#FDFBF7',
        encre: '#18181B',
        vert: '#10B981',
      },
      animation: {
        'float-slow':   'float 6s ease-in-out infinite',
        'float-medium': 'float 4.5s ease-in-out infinite 0.5s',
        'float-fast':   'float 3.8s ease-in-out infinite 1s',
        'fade-up':      'fadeUp 0.7s ease-out forwards',
        'fade-in':      'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
