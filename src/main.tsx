import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './assets/globalStyle';
import ScrollIndexProvider from './components/ContextAPI';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ScrollIndexProvider>
      <App />
    </ScrollIndexProvider>
  </React.StrictMode>,
);