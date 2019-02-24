import { configure } from '@storybook/react';
import { injectGlobal } from 'emotion';

const req = require.context('../src', true, /\.stories\.(js|ts|tsx)$/);

injectGlobal`
  html, body, #root {
    height: 100%;
  } 
`;

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);