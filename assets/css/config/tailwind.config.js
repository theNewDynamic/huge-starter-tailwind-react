module.exports = {
  purge: require('./purge.config.js'),
  darkMode: 'media',
  theme: {
    extend: {
      // Fonts are stored in their own module to tidy up the root config file.
      fontFamily: require('./fonts.config.js'),
      fontSize: {
        huge: ['13rem', {
          letterSpacing: '1.2',
          lineHeight: '.9',
        }],
      }
    }
  },
  variants: {
    // https://tailwindcss.com/docs/configuring-variants
    display: ['responsive', 'group-hover', 'hover']
  },
};
