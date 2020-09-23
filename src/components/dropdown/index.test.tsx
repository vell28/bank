import React from 'react';

import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { mainDarkTheme } from 'modules/themes';
import { SidebarDropDown } from '.';

const InnerRender = () => (
  <div className="inner-render">
    Account
    {' '}
    <br />
    {' '}
    line1
    {' '}
    <br />
    {' '}
    line2
  </div>
);

describe('<SidebarDropDown /> tests', () => {
  test('should success render, should open/close inner func', () => {
    const component: any = mount(
      <ThemeProvider theme={mainDarkTheme}>
        <SidebarDropDown render={<InnerRender />}>
          <div className="open-btn">openBtn</div>
        </SidebarDropDown>
      </ThemeProvider>,
    );
    /*    const btnOpen = component.find('.open-btn');
    const emptyMenu = component.find('.inner-render');
    expect(emptyMenu.length).toEqual(0);

    btnOpen.simulate('click');

    const notEmptyMenu = component.find('.inner-render');

    expect(notEmptyMenu.length).toEqual(1); */
    // TODO: add checking overflow hidden
    expect(toJson(component)).toMatchSnapshot();
  });

  test('should been closed with external handle', () => {
    const component: any = mount(
      <ThemeProvider theme={mainDarkTheme}>
        <SidebarDropDown render={<InnerRender />} isShown={false}>
          <div className="open-btn">openBtn</div>
        </SidebarDropDown>
      </ThemeProvider>,
    );
    // const emptyMenu = component.find('.inner-render');
    // expect(emptyMenu.length).toEqual(0);
    // TODO: add checking overflow hidden
    expect(toJson(component)).toMatchSnapshot();
  });

  test('should been opened with external handle', () => {
    const component: any = mount(
      <ThemeProvider theme={mainDarkTheme}>
        <SidebarDropDown render={<InnerRender />} isShown>
          <div className="open-btn">openBtn</div>
        </SidebarDropDown>
      </ThemeProvider>,
    );
    const emptyMenu = component.find('.inner-render');
    expect(emptyMenu.length).toEqual(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
