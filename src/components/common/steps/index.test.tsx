import React from 'react';

import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { TestWrapper } from '../test-wrapper';

import { Step, Steps } from '.';

describe('<Steps /> tests', () => {
  test('Should success render <Steps />, should render step of id', () => {
    const component: any = mount(
      <TestWrapper>
        <Steps stepId={0}>
          <Step id={0}>
            <span className="step-0">1</span>
          </Step>
          <Step id={1}>
            <span className="another">1</span>
          </Step>
          <Step id={2}>2</Step>
        </Steps>
      </TestWrapper>,
    );
    const activeStep = component.find('.step-0');
    const anotherStep = component.find('.anotherStep');

    expect(activeStep.length).toEqual(1);
    expect(anotherStep.length).toEqual(0);
    expect(toJson(component)).toMatchSnapshot();
  });
});
