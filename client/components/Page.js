// Page Component Template
import React from 'react';
import { ThemeProvider } from 'styled-components';

import PleaseSignIn from './PleaseSignIn';
import theme from '../theme';

const Page = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <PleaseSignIn>{children}</PleaseSignIn>
    </ThemeProvider>
  );
};

export default Page;
