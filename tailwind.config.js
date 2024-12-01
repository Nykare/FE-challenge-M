/** @type {import('tailwindcss').Config} */
export default {
  plugins: [],
  theme: {
    extend: {
      keyframes: {
        menuAppear: {
          '0%': { top: '60px', opacity:'0' },
          '100%': { top: '80px', opacity:'1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        menuAppear: 'menuAppear 200ms linear',
        wiggle: 'wiggle 500ms ease-in-out 3',
      },
      transitionProperty: {
        'margin': 'margin',
      },
      colors: {
        'pink': '#e6007e',
        'light-pink': '#e6007e0f',
        'light-pink-dark': '#e6007e00',
        'gray-overlay': '#323232',
        'light-gray': '#e8e8e8',
        'dark-gray': '#666666',
        'p-light': '#444444',
        'p-dark': '#b5bcc2',
      },
    }
  },
  content: ["./index.html",'./src/**/*.{svelte,js,ts}'], // for unused CSS
  variants: {
    extend: {},
  },
  darkMode: 'selector',
}
