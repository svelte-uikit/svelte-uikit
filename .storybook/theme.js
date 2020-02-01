import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#1e87f0',
  colorSecondary: '#0b4580',

  // UI
  appBg: '#f0f0f0',
  appContentBg: '#fff',
  appBorderColor: '#f0f0f0',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Montserrat", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#666',
  textInverseColor: '#fff',

  // Toolbar default and active colors
  barTextColor: '#fff',
  barSelectedColor: '#0b4580',
  barBg: '#1e87f0',

  // Form colors
  inputBg: '#fff',
  inputBorder: '#e5e5e5',
  inputTextColor: '#666',
  inputBorderRadius: 0,

  brandTitle: 'Svelte UIkit',
  brandUrl: 'https://example.com',
  brandImage: 'https://placehold.it/120x120',
});
