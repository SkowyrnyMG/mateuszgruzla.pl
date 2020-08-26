import React, { useState } from 'react';

export const ThemeContext = React.createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>{children}</ThemeContext.Provider>;
};
