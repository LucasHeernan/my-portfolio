/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    transitionDelay: {
      0: '0s',
      1: '100ms',
      2: '200ms',
      3: '300ms',
      4: '400ms',
      5: '500ms',
      6: '600ms',
      7: '700ms',
      8: '800ms',
      9: '900ms',
      10: '1000ms',
      11: '1100ms',
      12: '1200ms',
      13: '1300ms',
      14: '1400ms',
      15: '1500ms',
      16: '1600ms',
      17: '1700ms',
      18: '1800ms',
      19: '1900ms',
      20: '2000ms',
      21: '2100ms',
      22: '2200ms',
      23: '2300ms',
      24: '2400ms',
      25: '2500ms',
      26: '2600ms',
      27: '2700ms',
      28: '2800ms',
      29: '2900ms',
      30: '3000ms',
      31: '3100ms',
      32: '3200ms',
      33: '3300ms',
      34: '3400ms',
      35: '3500ms',
      36: '3600ms',
      37: '3700ms',
      38: '3800ms',
      39: '3900ms',
      40: '4000ms',
      41: '4100ms',
      42: '4200ms',
      43: '4300ms',
      44: '4400ms',
      45: '4500ms',
      46: '4600ms',
      47: '4700ms',
      48: '4800ms',
      49: '4900ms',
      50: '5000ms'
    },
    extend: {
      keyframes: {
        letters: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, -100%, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        rubberBand: {
          '0%': {
            transform: 'scale3d(1, 1, 1)',
          },
          '30%': {
            transform: 'scale3d(1.25, 0.75, 1)',
          },
          '40%': {
            transform: 'scale3d(0.75, 1.25, 1)',
          },
          '50%': {
            transform: 'scale3d(1.15, 0.85, 1)',
          },
          '65%': {
            transform: 'scale3d(0.95, 1.05, 1)',
          },
          '75%': {
            transform: 'scale3d(1.05, 0.95, 1)',
          },
          '100%': {
            transform: 'scale3d(1, 1, 1)',
          },
        },
        bounceIn: {
          'from, 20%, 40%, 60%, 80%, to': {
            'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          },
          '0%': {
            opacity: '0',
            transform: 'scale3d(0.3, 0.3, 0.3)',
          },
          '20%': {
            transform: 'scale3d(1.1, 1.1, 1.1)',
          },
          '40%': {
            transform: 'scale3d(0.9, 0.9, 0.9)',
          },
          '60%': {
            opacity: '1',
            transform: 'scale3d(1.03, 1.03, 1.03)',
          },
          '80%': {
            transform: 'scale3d(0.97, 0.97, 0.97)',
          },
          to: {
            opacity: '1',
            transform: 'scale3d(1, 1, 1)',
          },
        }
      },
    },
  },
  plugins: [],
}

