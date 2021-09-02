import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './config/theme';
import App from '../App';

const ThemedApp = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

export default ThemedApp;
