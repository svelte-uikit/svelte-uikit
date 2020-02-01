const path = require('path');

module.exports = {
  stories: ['../src/guide/**/*.mdx', '../src/stories/**/*.mdx'],
  addons: ['@storybook/addon-docs'],
  webpackFinal: async config => {
    config.resolve = {
      alias: {
        'svelte-uikit': path.resolve(__dirname, '../src/components/'),
      },
      extensions: [...config.resolve.extensions, '.svelte'],
    };

    return config;
  },
};
