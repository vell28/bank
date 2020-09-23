import React from 'react';

import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { languagesList } from 'modules/localization';
import { TestWrapper } from '../test-wrapper';
import { LanguageSelector } from '.';

const activeLng = 'ru';

describe('<LanguageSelector /> tests', () => {
  test('Should success render <LanguageSelector />', () => {
    const onChange = jest.fn();
    const component: any = mount(
      <TestWrapper>
        <LanguageSelector activeLng={activeLng} languages={languagesList} onLngChange={onChange} />
      </TestWrapper>,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  test('Should open/hide, change lang cb <LanguageSelector />', () => {
    const onChange = jest.fn();
    const component: any = mount(
      <TestWrapper>
        <LanguageSelector activeLng={activeLng} languages={languagesList} onLngChange={onChange} />
      </TestWrapper>,
    );
    const clickedDiv = component.find('div').at(1);
    clickedDiv.simulate('click');
    const chevron = component.find('.fa-chevron-down');
    expect(chevron.length).toEqual(1);
    const lngBtn = component.find('span').first();
    lngBtn.simulate('click');
    expect(onChange).toBeCalled();
  });
});
