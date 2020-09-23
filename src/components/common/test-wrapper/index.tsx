import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { mainDarkTheme } from 'modules/themes';
import { store } from 'modules/store';

interface ITestWrapper {
  children: React.ReactNode;
}

export const TestWrapper: React.FC<ITestWrapper> = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={mainDarkTheme}>
      <>{children}</>
    </ThemeProvider>
  </Provider>
);
