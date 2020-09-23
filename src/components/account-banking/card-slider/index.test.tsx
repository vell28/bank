import React from 'react';

import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { cardData } from 'models/organizations/mock';
import { mainDarkTheme } from 'modules/themes';
import { CardSlider } from '.';

const accountId = 'accountId';
describe('<CardSlider /> tests', () => {
  test('should success render, should render 3 slide', () => {
    const onSelectCard = jest.fn();
    const component: any = mount(
      <ThemeProvider theme={mainDarkTheme}>
        <CardSlider cards={[cardData, cardData, cardData]} accountId={accountId} onSelectCard={onSelectCard} />
      </ThemeProvider>,
    );
    const btnNext = component.find('.btn-next');
    btnNext.simulate('click');

    expect(btnNext.length).toEqual(1);
    expect(onSelectCard).toBeCalled();
    expect(toJson(component)).toMatchSnapshot();
  });
});
