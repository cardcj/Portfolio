import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    common: {
      black: '#484848',
      white: '#fbfbfb',
      grey: '#626262',
    },
    primary: 'coral',
    secondary: 'aquamarine',
    tertiary: 'purple',
    darkenPrimary: '#01f8a8',
    faded: '#e0e0e0',
  },
  fonts: {
    header: 'Black Ops One',
    main: 'Arvo',
  },
};

// Constrains border-radius values to increments of 5px
export const radiusConstraint = (relBorder: number): string => {
  const actualBorder = relBorder * 5;
  return actualBorder + 'px';
};

// Constrains the spacing used by padding and margins to increments of 5px
export const spacing = (relSpacing: number): string => {
  const actualSpacing = relSpacing * 5;
  return actualSpacing + 'px';
};
