import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  scrollWidth: 5,
  borderRadius: 5,
  spacing: (value: number) => `${2 * value}px`,
  colors: {
    background: {
      100: '#FFFFFF',
      200: '#FFFFFF',
      300: '#FFFBFC',
      400: '#F5F5F5',
      500: '#F5F5F5',
      600: '#EBEBEB',
      700: '#EBEBEB',
      800: '#E0E0E0',
      900: '#E0E0E0',
    },
    foreground: {
      100: '#474747',
      200: '#474747',
      300: '#3D3D3D',
      400: '#333333',
      500: '#262626',
      600: '#1F1F1F',
      700: '#141414',
      800: '#0A0A0A',
      900: '#000000',
    },
    highlight: {
      100: '#C1C3C1',
      200: '#B6B9B7',
      300: '#ACAFAD',
      400: '#A1A5A2',
      500: '#969A97',
      600: '#8D918D',
      700: '#828782',
      800: '#787D78',
      900: '#6E726E',
    },
    warning: {
      100: '#FFE9AD',
      200: '#FFE499',
      300: '#FFDE85',
      400: '#FFD970',
      500: '#FFD25A',
      600: '#FFCE47',
      700: '#FFC933',
      800: '#FFC31F',
      900: '#FFBE0A',
    },
    info: {
      100: '#3C87CD',
      200: '#327DC3',
      300: '#2E72B2',
      400: '#2A68A2',
      500: '#235789',
      600: '#215382',
      700: '#1D4972',
      800: '#193E61',
      900: '#153451',
    },
    error: {
      100: '#F61713',
      200: '#D90B08',
      300: '#B10906',
      400: '#8A0705',
      500: '#6B0504',
      600: '#620504',
      700: '#4E0503',
      800: '#3B0402',
      900: '#270301',
    },
    success: {
      100: '#A6C9B0',
      200: '#99C2A5',
      300: '#8CBA9A',
      400: '#80B38F',
      500: '#73AB84',
      600: '#66A378',
      700: '#5C996E',
      800: '#548C65',
      900: '#4D805C',
    },
  },
};

export default defaultTheme;
