const constTheme = {
  accent: {
    primary: '#FFD829',
    secondary: '#9B37FF',
    tertiary: '#FF593D',
  },
  fontSize: {
    xl: '28.5px',
    l: '24px',
    ml: '20px',
    m: '18px',
    ms: '15px',
  },
  fontWeight: {
    thin: 300,
    regular: 500,
    bold: 700,
  },
  shadow: {},
};

export const lightTheme = {
  color: {
    header: '#12181B',
    content: '#49596D',
    contentFaded: '#49596Daa',
    input: '#F1FAFF',
    bg: '#FAFDFF',
  },
  base: constTheme,
};

export const darkTheme = {
  color: {
    header: '#F2F8FF',
    content: '#B2BECD',
    contentFaded: '#B2BECDaa',
    menu: '#2A2E35',
    input: '#445B66',
    bg: '#12181B',
  },
  base: constTheme,
};
