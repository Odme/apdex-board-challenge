import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App';
import defaultTheme from './theme';
import ThemeGlobal from './components/ThemeGlobal';
import DataProvider from './providers/DataProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={{ ...defaultTheme }}>
      <ThemeGlobal />
      <DataProvider>
        <App />
      </DataProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
