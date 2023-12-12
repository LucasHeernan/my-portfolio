/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translate3d(0, -100%, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translate3d(0, 100%, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        rubberBand: {
          '0%': { transform: 'scale3d(1, 1, 1)' },
          '30%': { transform: 'scale3d(1.25, 0.75, 1)' },
          '40%': { transform: 'scale3d(0.75, 1.25, 1)' },
          '50%': { transform: 'scale3d(1.15, 0.85, 1)' },
          '65%': { transform: 'scale3d(0.95, 1.05, 1)' },
          '75%': { transform: 'scale3d(1.05, 0.95, 1)' },
          '100%': { transform: 'scale3d(1, 1, 1)' }
        },
        bounce: {
          'from, 20%, 40%, 60%, 80%, to': { 'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
          '0%': { transform: 'scale3d(0.5, 0.5, 0.5)' },
          '20%': { transform: 'scale3d(1.1, 1.1, 1.1)' },
          '40%': { transform: 'scale3d(0.9, 0.9, 0.9)' },
          '60%': { transform: 'scale3d(1.03, 1.03, 1.03)' },
          '80%': { transform: 'scale3d(0.97, 0.97, 0.97)' },
          to: { transform: 'scale3d(1, 1, 1)' }
        },
        bounceInUp: {
          '0%': { opacity: '0', transform: 'translate3d(0, 100%, 0)' },
          '30%': { opacity: '0.3' },
          '50%': { opacity: '0.6', transform: 'translate3d(0, -2px, 0)' },
          '70%': { opacity: '0.8', transform: 'translate3d(0, -4px, 0)' },
          '90%': { opacity: '0.9', transform: 'translate3d(0, 1px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' }
        },
        slide: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        },
        leftDown: {
          '0%': { transform: 'rotate(-35deg)' },
          '25%': { transform: 'rotate(-65deg)' },
          '50%': { transform: 'rotate(-92deg)' },
          '100%': { transform: 'translateY(-15px) translateX(-350px)' }
        },
        leftUp: {
          '0%': { transform: 'rotate(-110deg)' },
          '25%': { transform: 'rotate(-95deg)' },
          '50%': { transform: 'rotate(-90deg)' },
          '100%': { transform: 'translateY(-15px) translateX(-350px)' }
        },
        rightDown: {
          '0%': { transform: 'rotate(35deg)' },
          '25%': { transform: 'rotate(65deg)' },
          '50%': { transform: 'rotate(92deg)' },
          '100%': { transform: 'translateY(-15px) translateX(350px)' }
        },
        rightUp: {
          '0%': { transform: 'rotate(110deg)' },
          '25%': { transform: 'rotate(95deg)' },
          '50%': { transform: 'rotate(90deg)' },
          '100%': { transform: 'translateY(-15px) translateX(350px)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 1000ms ease-in-out forwards',
        fadeInDown: 'fadeInDown 1000ms ease-in-out forwards',
        fadeInUp: 'fadeInUp 1000ms ease-in-out forwards',
        rubberBand: 'rubberBand 700ms ease-in-out none',
        bounce: 'bounce 700ms ease-in-out forwards',
        bounceInUp: 'bounceInUp 500ms ease-out none',
        slide: 'slide 35s infinite linear',
        leftDown: 'leftDown 500ms ease-out none',
        leftUp: 'leftUp 500ms ease-out none',
        rightDown: 'rightDown 500ms ease-out none',
        rightUp: 'rightUp 500ms ease-out none',
      }
    },
  },
  plugins: [],
}
