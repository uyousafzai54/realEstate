// Page Component Template
import React from 'react';
import { ThemeProvider } from 'styled-components';

import Nav from './Nav';
import theme from '../theme';
import GlobalStyles from '../styles/GlobalStyles';

const Page = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Page;
