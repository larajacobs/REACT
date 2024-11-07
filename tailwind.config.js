module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#333', // Custom dark background color
        'light-bg': '#f8f8f8', // Custom light background color
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      "light", // Default light theme
      "dark",  // Default dark theme
      "cupcake", // Example custom theme
    ],
  },
};
