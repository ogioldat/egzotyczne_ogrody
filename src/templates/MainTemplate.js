import React from 'react';
import GlobalStyle from 'theme/GlobalStyles';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/MainTheme';

const MainTemplate = ({children}) => (
  <>
    <GlobalStyle/>
    <ThemeProvider theme={ theme }>
      <>
        {
          children
        }
      </>
    </ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withRouter(MainTemplate);