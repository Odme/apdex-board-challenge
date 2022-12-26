import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App';
import defaultTheme from './components/shared/theme';
import ThemeGlobal from './components/shared/ThemeGlobal';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={{ ...defaultTheme }}>
      <ThemeGlobal />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
