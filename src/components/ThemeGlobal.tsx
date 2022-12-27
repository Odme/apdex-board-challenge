import { useContext } from 'react';
import { createGlobalStyle, ThemeContext } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  body, html, :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    margin: 0;
    height: 100vh;
    width: 100vw;
    outline: 0;
    color: ${({ theme }) => theme.colors.foreground[500]};
    background-color: ${({ theme }) => theme.colors.background[500]};
  }

  * {
    box-sizing: border-box;
    scrollbar-color: ${({ theme }) => theme.colors.background[900]} transparent;
    scrollbar-width: thin;
    line-height: 1.2;
  }

  *::-webkit-scrollbar {
    width: ${({ theme }) => theme.scrollWidth}px;
    height: 0px;
    background-color: transparent;
  }

  *::-webkit-scrollbar-track {
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.background[900]};
    border-radius: ${({ theme }) => Math.floor(theme.scrollWidth / 2.0)}px;
  }
`;

const ThemeGlobal = () => {
  const themeContext = useContext(ThemeContext);
  return <GlobalStyle theme={themeContext} />;
};

export default ThemeGlobal;
