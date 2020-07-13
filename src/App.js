import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import './config/reactotronConfig';
import { store } from './store';
import GlobalStyle from './styles/global';
import defaultTheme from './styles/themes/defaultTheme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={6000} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
