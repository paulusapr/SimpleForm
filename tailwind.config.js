/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        0: '0px 4px 8px rgba(0, 0, 0, 0.25)',
      },

      colors: {
        black: {
          0: '#000000',
        },
      },

      screens: {
        mobile: {
          max: '767px',
        },
        tablet: {
          max: '1023px',
          min: '768px',
        },
        laptop: '1024px',
      },
    },
  },
};
