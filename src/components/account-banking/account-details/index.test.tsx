import React from 'react';

import { ThemeProvider } from 'styled-components';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';

import { mainDarkTheme } from 'modules/themes';
import { accountsData } from 'models/organizations/mock';
import { AccountDetails } from '.';

describe('<AccountDetails /> tests', () => {
  test('should success render', () => {
    const component: any = render(
      <ThemeProvider theme={mainDarkTheme}>
        <AccountDetails account={accountsData[0]} />
      </ThemeProvider>,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
