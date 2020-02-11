import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

import addHeadWarning from './head-warning';

addHeadWarning('manager-head-not-loaded', 'Manager head not loaded');

addons.setConfig({
  showRoots: true,
  theme: themes.light, // { base: 'dark', brandTitle: 'Storybook!' },
});
