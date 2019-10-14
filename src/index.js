import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './store';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#73e8ff',
      main: '#29b6f6',
      dark: '#0086c3',
      contrastText: '#fff',
    },
    secondary: {
      light: '#8d98f2',
      main: '#5a6abf',
      dark: '#23408r',
      contrastText: '#000',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

//Hack to pass data to service worker
window.onServiceWorkerUpdated = onUpdate => {
  window.SWUpdated = onUpdate;
};


ReactDOM.render(
<MuiThemeProvider theme={theme}>
  <Provider store={store}>
    <App />
  </Provider>
</MuiThemeProvider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
