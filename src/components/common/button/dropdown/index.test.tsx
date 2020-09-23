import React from 'react';

import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { mainDarkTheme } from 'modules/themes';
import { SidebarDropBtn } from '.';

describe('<SidebarDropBtn />', () => {
  test('SidebarDropBtn', () => {
    const onDropdownCb = jest.fn();
    const isActive = false;
    const component: any = mount(
      <ThemeProvider theme={mainDarkTheme}>
        <SidebarDropBtn isActive={isActive} onClick={onDropdownCb}>
          account
        </SidebarDropBtn>
      </ThemeProvider>,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
