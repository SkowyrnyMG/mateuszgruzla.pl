import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import { ThemeContext } from 'context/theme-context';

import { lightTheme, darkTheme } from 'theme/theme';
import GlobalStyles from '../theme/global-styles';

const RootStylesWrapper = ({ children }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  console.log('root styles wrapper');
  console.log(isDarkTheme);

  return (
    <div>
      <ThemeProvider theme={isDarkTheme === true ? darkTheme : lightTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </div>
  );
};

export default RootStylesWrapper;
