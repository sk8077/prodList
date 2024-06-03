/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // colors: {
      //   gray: {
      //     100: '#141414',
      //     200: '#0c0c0c',
      //   },
      //   gainsboro: '#e5dfd9',
      //   limegreen: '#2fc14f',
      //   black: '#000',
      // },
      spacing: {},
      fontFamily: {
        roboto: 'Roboto',
        'encode-sans': "'Encode Sans'",
        'roboto-serif': "'Roboto Serif'",
        comme: 'Comme',
      },
      // borderRadius: {
      //   'mid-1': '17.1px',
      //   '4xs-5': '8.5px',
      // },
    },
    // fontSize: {
    //   "mini-5": "0.906rem",
    //   "15xl-8": "2.175rem",
    //   "2xl": "1.313rem",
    //   "9xl": "1.75rem",
    //   xs: "0.75rem",
    //   "lg-8": "1.175rem",
    //   "lgi-1": "1.194rem",
    //   "xl-5": "1.281rem",
    //   base: "1rem",
    //   "15xl-2": "2.138rem",
    //   "8xl": "1.688rem",
    //   smi: "0.813rem",
    //   sm: "0.875rem",
    //   lg: "1.125rem",
    //   xl: "1.25rem",
    //   inherit: "inherit",
    // },
    // screens: {
    //   mq750: {
    //     raw: "screen and (max-width: 750px)",
    //   },
    //   mq675: {
    //     raw: "screen and (max-width: 675px)",
    //   },
    //   mq450: {
    //     raw: "screen and (max-width: 450px)",
    //   },
    // },
  },
  corePlugins: {
    preflight: false,
  },
};
