import React, { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { ThemeContext } from 'context/theme-context';

import { lightTheme, darkTheme } from 'theme/theme';
import GlobalStyles from '../theme/global-styles';

const RootStylesWrapper = ({ children }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  // We are checking if component is mounted to basicly trigger Rerender on whole page. We have to do that because React’s hydrate method treats differences between client and server. Right now our site will use theme from user cookies instead of default.
  const [isMounted, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  });

  return (
    <div>
      <ThemeProvider theme={isDarkTheme === true ? darkTheme : lightTheme}>
        <GlobalStyles />
        {isMounted === true && <>{children}</>}
      </ThemeProvider>
    </div>
  );
};

export default RootStylesWrapper;
