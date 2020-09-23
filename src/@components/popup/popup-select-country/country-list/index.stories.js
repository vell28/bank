import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import CountryList from '.';
import { mainDarkTheme } from '../../../../modules/themes';

/* tslint:disable:no-console */
storiesOf('SelectCountry', module)
  .addDecorator((story) => <div style={{ padding: '100px 0', width: '420px', height: '495px' }}>{story()}</div>)
  .add('list', () => (
    <ThemeProvider theme={mainDarkTheme}>
      <CountryList
        searchValue=""
        selectedCounty=""
        handleSelectCountry={(value) => () => console.log('click-country: \n', value)}
      />
    </ThemeProvider>
  ));
/* tslint:enable:no-console */
