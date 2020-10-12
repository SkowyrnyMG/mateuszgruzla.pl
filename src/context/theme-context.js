import React, { useState } from 'react';
import Cookies from 'js-cookie';

export const ThemeContext = React.createContext({});

export const ThemeContextProvider = ({ children }) => {
  // const toggleTheme = () => {
  //   if (isDarkTheme === false) {
  //     Cookies.set('theme', 'dark');
  //     setIsDarkTheme(true);
  //   } else {
  //     Cookies.set('theme', 'light');
  //     setIsDarkTheme(false);
  //   }
  // };
  // const localTheme = Cookies.get('theme');

  // console.log(localTheme);
  // if (localTheme === 'dark') {
  //   setIsDarkTheme(true);
  // } else if (localTheme === 'light') {
  //   setIsDarkTheme(false);
  // }
  // if (!localTheme) {
  //   setIsDarkTheme(true);
  //   Cookies.set('theme', 'dark');
  // }

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
