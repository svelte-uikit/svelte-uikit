import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';
import { addParameters } from '@storybook/svelte';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
