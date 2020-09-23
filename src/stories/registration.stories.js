import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { store } from '../modules/store';
import { mainDarkTheme } from '../modules/themes';
import { ErrorBoundary } from '../components/errors/error-boundary';
import { UploadingPage } from '../modules/registration/components/pages/physical/uploading';
import { Additional } from '../modules/registration/components/pages/physical/additional-confirm';
import { DropableFileInput } from '../modules/registration/components/common/dropable-file-input';
import { DatePicker } from '../modules/registration/components/common/date-picker';

storiesOf('Registration stories additional info', module)
  .add('AdditionalInfo', () => (
    <Provider store={store}>
      <ThemeProvider theme={mainDarkTheme}>
        <ErrorBoundary>
          <Additional />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  ))
  .add('LoadingScreen', () => (
    <Provider store={store}>
      <ThemeProvider theme={mainDarkTheme}>
        <ErrorBoundary>
          <UploadingPage />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  ))
  .add('DraggableFileInput', () => (
    <Provider store={store}>
      <ThemeProvider theme={mainDarkTheme}>
        <ErrorBoundary>
          <DropableFileInput />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  ))
  .add('StyledDatepicker', () => (
    <Provider store={store}>
      <ThemeProvider theme={mainDarkTheme}>
        <ErrorBoundary>
          <DatePicker />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  ));
