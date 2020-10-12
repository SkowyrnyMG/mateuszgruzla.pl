import React, { useState } from 'react';
import Cookies from 'js-cookie';

export const ThemeContext = React.createContext({});

export const ThemeContextProvider = ({ children }) => {
  let userTheme;
  const savedTheme = Cookies.get('theme');
  if (savedTheme) {
    userTheme = savedTheme === 'light' ? false : true;
  } else {
    userTheme = true;
    Cookies.set('theme', 'dark');
  }
  const [isDarkTheme, setIsDarkTheme] = useState(userTheme);

  return <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>{children}</ThemeContext.Provider>;
};
