const constTheme = {
  accent: {
    // primary: '#FFD829', // 1
    primary: '#FDCA40', // 2
    // primary: '#2176FF', //3

    // secondary: '#9B37FF', // 1
    secondary: '#2176FF', // 2
    // secondary: '#FDCA40', // 3

    tertiary: '#FF593D',
    // tertiary: '#FF593D',

    quaternary: '#FF00E5',
  },
  fontSize: {
    massive: '4.5rem',
    big: '46px',
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
  shadow: {
    darkSmall: '0 0 1.5rem -.6rem #12181B',
  },
};

export const lightTheme = {
  color: {
    header: '#12181B',
    secondary: '#eaf6ff',
    content: '#49596D',
    contentFaded: '#49596Daa',
    menu: '#ebf0ff',
    input: '#fff',
    bg: '#FAFDFF',
  },
  base: constTheme,
};

export const darkTheme = {
  color: {
    header: '#F2F8FF',
    secondary: '#1C282E',
    content: '#B2BECD',
    contentFaded: '#B2BECDaa',
    menu: '#2A2E35',
    input: '#445B66',
    bg: '#12181B',
  },
  base: constTheme,
};
