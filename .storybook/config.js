import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import theme from 'theme/MainTheme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyles';


function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </>
));

configure(loadStories, module);