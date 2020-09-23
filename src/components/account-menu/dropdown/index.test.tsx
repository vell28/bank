import React from 'react';

import { ThemeProvider } from 'styled-components';
import { enzymeFind } from 'styled-components/test-utils';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { mainDarkTheme } from 'modules/themes';

import { accountsData } from 'models/organizations/mock';
import { AccountMenuDropdown } from '.';
import { AccountCurrencies } from '../elements';

describe('<AccountMenuDropdown /> tests', () => {
  test('should success render, should been unchecked', () => {
    const onDone = jest.fn();
    const component: any = mount(
      <ThemeProvider theme={mainDarkTheme}>
        <AccountMenuDropdown
          onDone={onDone}
          personalAccounts={[accountsData[0]]}
          businessAccounts={[accountsData[1]]}
        />
      </ThemeProvider>,
    );
    const checkbox = enzymeFind(component, AccountCurrencies);
    expect(checkbox.length).toEqual(2);
    expect(toJson(component)).toMatchSnapshot();
  });
});
