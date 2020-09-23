import React from 'react';

import { ThemeProvider } from 'styled-components';
// import { enzymeFind } from 'styled-components/test-utils';
import { mount } from 'enzyme';

import { mainDarkTheme } from 'modules/themes';

import { ErrorBoundary } from '.';

const ComponentWithError: React.FC<{ test: any }> = ({ test }) => <div>{test.data.error}</div>;

describe('<ErrorBoundary /> tests', () => {
  test('should render content without error', () => {
    const component: any = mount(
      <ThemeProvider theme={mainDarkTheme}>
        <ErrorBoundary>
          <div className="test">test</div>
        </ErrorBoundary>
      </ThemeProvider>,
    );
    const testElem = component.find('.test');
    expect(testElem.length).toEqual(1);
  });
  test('should render error content if error in child tree', () => {
    const component: any = mount(
      <ThemeProvider theme={mainDarkTheme}>
        <ErrorBoundary>
          <ComponentWithError test={{}} />
        </ErrorBoundary>
      </ThemeProvider>,
    );
    const testElem = component.find('.test');
    expect(testElem.length).toEqual(0);
    // TODO: uncomment it after babel-plugin-styled-component
    // const errorElem = enzymeFind(component, ErrorBox);
    // expect(errorElem.length).toEqual(1);
  });
});
