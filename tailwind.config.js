/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      // fontFamily: {
      //   sans: ['Fira Sans', 'sans-serif'],
      //   display: ['Fira Sans'],
      //   body: ["Fira Sans"],
      //   fancy: ["Road Rage"],
      //   originTech: ["OriginTech"]
      //   // sans: [
      //   //   'system-ui',
      //   //   '-apple-system',
      //   //   'BlinkMacSystemFont',
      //   //   '"Segoe UI"',
      //   //   'Roboto',
      //   //   '"Helvetica Neue"',
      //   //   'Arial',
      //   //   '"Noto Sans"',
      //   //   'sans-serif',
      //   //   '"Apple Color Emoji"',
      //   //   '"Segoe UI Emoji"',
      //   //   '"Segoe UI Symbol"',
      //   //   '"Noto Color Emoji"',
      //   // ],
      //   // serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      //   // mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      // },
    },
  },
  plugins: [],
};
