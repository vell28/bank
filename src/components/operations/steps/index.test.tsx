import React from 'react';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';

import { mainDarkTheme } from 'modules/themes';
import { accountsData } from 'models/organizations/mock';
import { store } from 'modules/store';
import SelectAmountStep from './step-2-select-amount';
import TransferStep3 from './step-3-sms-code';
import { SuccessStep } from './step-4-success';

describe('<TransferSteps /> UI tests', () => {
  test('Should success render <SelectAmountStep />', () => {
    const onNext = jest.fn();
    const component: any = render(
      <Provider store={store}>
        <ThemeProvider theme={mainDarkTheme}>
          <SelectAmountStep onNext={onNext} balance={accountsData[0].balances[0]} isLoading={false} />
        </ThemeProvider>
      </Provider>,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  test('Should success render <TransferStep3 />', () => {
    const onNext = jest.fn();
    const component: any = render(
      <Provider store={store}>
        <ThemeProvider theme={mainDarkTheme}>
          <TransferStep3 onNext={onNext} isLoading={false} codeLength={4} />
        </ThemeProvider>
      </Provider>,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  test('Should success render <SuccessStep />', () => {
    const component: any = render(
      <ThemeProvider theme={mainDarkTheme}>
        <SuccessStep />
      </ThemeProvider>,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
