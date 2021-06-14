import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './Components/App';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffff6b',
      main: '#fdd835',
      dark: '#c6a700',
    },
    secondary: {
      light: '#80e27e',
      main: '#4caf50',
      dark: '#087f23',
      contrastText: '#fff',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('app')
);
