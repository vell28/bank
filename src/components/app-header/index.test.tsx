import React from 'react';

import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';

import { mainDarkTheme } from 'modules/themes';
import { mainMenuPaths } from 'containers/routing/utils';

import { languagesList } from 'modules/localization';
import { AppHeader } from '.';

describe('<AppHeader /> tests', () => {
  test('should success render, should highlight active link', () => {
    const onChangeCb = jest.fn();
    const index = 2;
    const component: any = mount(
      <BrowserRouter>
        <ThemeProvider theme={mainDarkTheme}>
          <AppHeader
            languages={languagesList}
            activeIndex={index}
            onLngChange={onChangeCb}
            activeLng="ru"
            navList={mainMenuPaths}
          >
            account
          </AppHeader>
        </ThemeProvider>
      </BrowserRouter>,
    );
    const activeLinkText = component.find('a[data-active=true]').text();
    expect(activeLinkText.toLowerCase()).toEqual(mainMenuPaths[index].name);
    expect(toJson(component)).toMatchSnapshot();
  });
});
