// eslint-disable-next-line no-undef
const withMT = require('@material-tailwind/react/utils/withMT');

// eslint-disable-next-line no-undef
module.exports = withMT({
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwind-scrollbar')],
});
