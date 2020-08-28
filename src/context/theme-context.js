import React, { useState } from 'react';

export const ThemeContext = React.createContext({});

const savedTheme = localStorage.getItem('theme');
const userTheme = savedTheme === 'light' ? false : true;

export const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(userTheme);

  return <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>{children}</ThemeContext.Provider>;
};
