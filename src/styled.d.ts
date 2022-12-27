import 'styled-components';

interface Palette {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    scrollWidth: number;
    spacing: (value: number) => string,
    colors: {
      foreground: Palette;
      background: Palette;
      highlight: Palette;
      warning: Palette;
      info: Palette;
      error: Palette;
      success: Palette;
    }
  }
}
