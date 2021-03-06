import type { DefaultThemeProps } from './types';

const defaultThemeProps = {
  borderRadius: 8,

  sizes: {
    font: {
      default: 14,
      xsmall: 10,
      small: 12,
      medium: 14,
      large: 18,
      xlarge: 22,
    },

    button: {
      default: 14,
      xsmall: 10,
      small: 12,
      medium: 14,
      large: 18,
      xlarge: 22,
    },

    icon: {
      default: 100,
      xsmall: 10,
      small: 50,
      medium: 100,
      large: 150,
      xlarge: 200,
    },
  },
};

export const darkTheme: DefaultThemeProps = {
  ...defaultThemeProps,
  mode: 'dark',

  colors: {
    main: '#9e5a63',
    secondary: '#c96567',

    background: {
      main: '#97aabd',
      secondary: '#ffffff',
    },

    font: {
      main: '#9e5a63',
      secondary: '#c96567',
    },

    button: {
      main: '#644e5b',
      secondary: '#314455',
    },

    icon: {
      main: '#644e5b',
      secondary: '#314455',
    },
  },
};

export const lightTheme: DefaultThemeProps = {
  ...defaultThemeProps,
  mode: 'light',

  colors: {
    main: '#303c6c',
    secondary: '#b4dfe5',

    background: {
      main: '#d2fdff',
      secondary: '#ffffff',
    },

    font: {
      main: '#303c6c',
      secondary: '#b4dfe5',
    },

    button: {
      main: '#f4976c',
      secondary: '#fbe8a6',
    },

    icon: {
      main: '#f4976c',
      secondary: '#fbe8a6',
    },
  },
};
