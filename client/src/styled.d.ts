import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      common: {
        black: string;
        white: string;
        grey: string;
      };
      primary: string;
      secondary: string;
      tertiary: string;
      darkenPrimary: string;
      faded: string;
    };
    fonts: {
      title: string;
      content: string;
    };
  }
}
