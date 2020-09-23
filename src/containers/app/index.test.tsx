import React from 'react';
import { MemoryRouter } from 'react-router';

import { render } from 'enzyme';
import toJson from 'enzyme-to-json';

import { TestWrapper } from 'components/common/test-wrapper';
import App from '.';

describe('<App /> tests', () => {
  test('Should success render <App />', () => {
    const component: any = render(
      <TestWrapper>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </TestWrapper>,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
