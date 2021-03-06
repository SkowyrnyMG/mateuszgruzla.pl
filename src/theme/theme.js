export const breakpoints = {
  huge: 1700,
  bigDesktop: 1440,
  mediumDesktop: 1300,
  desktop: 1168,
  bigTablet: 1028,
  tablet: 767,
  smallTablet: 680,
  bigPhoneBreak: 570,
  bigPhone: 480,
  phone: 374,
  smallPhone: 350,
};

const constTheme = {
  accent: {
    primary: '#FDCA40',
    secondary: '#2176FF',
    tertiary: '#FF593D',
    quaternary: '#FF00E5',
    success: '#28a745',
    error: '#dc3545',
  },
  fontSize: {
    postMainHeading: '6rem',
    massive: '4.5rem',
    big: '46px',
    postBigHeading: '30px',
    xl: '28.5px',
    l: '24px',
    ml: '18px',
    m: '18px',
    ms: '16px',
    s: '14px',
  },
  fontWeight: {
    thin: 300,
    regular: 500,
    bold: 700,
  },
  shadow: {
    darkSmall: '0 0 1.5rem -.6rem #12181B',
    contrast: '0 0 .8rem -.4rem #12181B',
  },
  fontFamily: {
    main: '"Montserrat", sans-serif',
    secondary: '"Changa One", cursive',
  },
  mq: Object.keys(breakpoints).reduce((acc, breakpoint) => {
    acc[breakpoint] = `@media (max-width: ${breakpoints[breakpoint]}px)`;
    return acc;
  }, {}),
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
    fadedBg: `#FAFDFFef`,
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
    fadedBg: `#12181Bef`,
  },
  base: constTheme,
};
