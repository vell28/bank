import React from 'react';

import { render } from 'enzyme';
import toJson from 'enzyme-to-json';

import { ICardUnmasked } from 'models/operations/card-settings/entities';
import { UnmaskedCardPreview } from '.';
import { TestWrapper } from '../test-wrapper';

const card: ICardUnmasked = {
  pin: '1234',
  expireAt: '2022-07-01T00:00:00',
  cvc: '000',
  owner: {
    embossedName: 'Card holder',
  },
  number: '5277 6001 0000 4032',
};

describe('<UnmaskedCardPreview /> UI tests', () => {
  test('Should success render <UnmaskedCardPreview />, with pin code', () => {
    const component: any = render(
      <TestWrapper>
        <UnmaskedCardPreview card={card} />
      </TestWrapper>,
    );
    expect(toJson(component)).toMatchSnapshot();
    expect(component.find('label').length).toEqual(4);
  });

  test('Test unmask function', () => {
    const component: any = render(
      <TestWrapper>
        <UnmaskedCardPreview card={card} />
      </TestWrapper>,
    );

    // get hidden values
    const hiddenText = component.text();
    expect(hiddenText.indexOf(card.number)).toEqual(-1);
    // TODO: add click function test

    /*    // click on checkbox
    const checkbox = enzymeFind(component, CheckboxBox);
    checkbox.simulate('click');
    // click to switcher
    const switcher = enzymeFind(component, SwitchBox);
    switcher.simulate('click');

    const notHiddenNumber = component.text();
    expect(notHiddenNumber.indexOf(card.number)).not.toEqual(-1); */

    expect(hiddenText).toMatchSnapshot();
  });
});
