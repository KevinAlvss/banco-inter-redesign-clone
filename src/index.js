import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'

import { GlobalStyle } from './styles/GlobalStyle'

import { LoginProvider } from './context/LoginContext'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <LoginProvider>
      <Routes />
    </LoginProvider>
  </React.StrictMode>,
  document.getElementById('root')
);