import React, { useState } from 'react';
import Cookies from 'js-cookie';

export const ThemeContext = React.createContext({});

export const ThemeContextProvider = ({ children }) => {
  // const savedTheme = localStorage.getItem('theme');
  const savedTheme = Cookies.get('theme');
  const userTheme = savedTheme === 'light' ? false : true;
  const [isDarkTheme, setIsDarkTheme] = useState(userTheme);

  return <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>{children}</ThemeContext.Provider>;
};
