import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';

import { store } from '../modules/store';
import { mainDarkTheme } from '../modules/themes';
import { ErrorBoundary } from '../components/errors/error-boundary';
// import { GlobalStyle } from "../modules/global-styles";
// import TransferError from "../containers/operations/transfer-error";

const step = 1;
const toggleShown = action('toggleMainModal');

storiesOf('Transfer Error', module)
  .addDecorator((story) => <div style={{ padding: '0 46px', width: '500px', minHeight: '500px' }}>{story()}</div>)
  .add('default', () => (
    <Provider store={store}>
      <ThemeProvider theme={mainDarkTheme}>
        <ErrorBoundary>
          <span>Component</span>
          {/* <GlobalStyle /> */}
          {/* <TransferError
                    step={step}
                    toggleShown={toggleShown}
                  /> */}
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  ));
