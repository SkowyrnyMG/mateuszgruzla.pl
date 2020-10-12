import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Cookies from 'js-cookie';

import { ThemeContext } from 'context/theme-context';

import { lightTheme, darkTheme } from 'theme/theme';
import GlobalStyles from '../theme/global-styles';

const RootStylesWrapper = ({ children }) => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  const savedTheme = Cookies.get('theme');
  const userTheme = savedTheme === 'light' ? false : true;
  setIsDarkTheme(userTheme);
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
