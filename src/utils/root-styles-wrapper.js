import React, { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { ThemeContext } from 'context/theme-context';

import { lightTheme, darkTheme } from 'theme/theme';
import GlobalStyles from '../theme/global-styles';

const RootStylesWrapper = ({ children }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const [isMounted, setMount] = useState(false);
  console.log('root styles wrapper');
  console.log(isDarkTheme);

  useEffect(() => {
    setMount(true);
    console.log(`Is mounted: ${isMounted}`);
  });
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
