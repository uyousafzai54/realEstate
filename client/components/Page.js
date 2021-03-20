// Page Component Template
import React from 'react';
import { ThemeProvider } from 'styled-components';

import Nav from './Nav';
import theme from '../theme';

const Page = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      {children}
    </ThemeProvider>
  );
};

export default Page;
