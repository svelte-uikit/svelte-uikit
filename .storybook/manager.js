import { addons } from '@storybook/addons';
import theme from './theme';

addons.setConfig({
  enableShortcuts: true,
  isFullscreen: false,
  isToolshown: true,
  panelPosition: 'bottom',
  selectedPanel: undefined,
  showNav: true,
  showPanel: false,
  sidebarAnimations: true,
  theme,
});
