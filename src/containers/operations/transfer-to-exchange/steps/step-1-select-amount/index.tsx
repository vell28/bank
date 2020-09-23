import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
  pathOr, pipe, filter, toPairs
} from 'ramda';

import { CheckBox } from 'components/common/checkbox';
import { nextStep } from 'models/main-modal/redux/actions';
import { getExchangeRates } from 'models/operations/transfer/redux/actions/exchange';
import { SingleTextInput } from 'components/redux-form/single-text-input';
import { NextBtnBox, NextBtn } from 'components/operations/steps/elements';
import { isNotZero, isRequired } from 'utils/redux-form/redux-form';
import { formatAmount, normalizeAmount } from 'utils/redux-form/formatter';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { CURRENCIES_IN_PROJECT } from 'modules/currencies';
import { DropDown } from './dropdown';
import {
  InputBox,
  DropDownButton,
  ExchangeBox,
  Title,
  ExchangeArrow,
  Circle,
  DropDownContainer,
  CurrencyCode,
} from './elements';

export interface IFormData {
  currency: string;
  amount: number;
}

export interface ITransferStep1Props {
  onSubmit: () => void;
  getRates: () => void;
}

interface IDropDownShownState {
  [key: string]: boolean;
}

interface ICurrencyCodeState {
  [key: string]: string;
}

type Props = InjectedFormProps<IFormData, ITransferStep1Props> & ITransferStep1Props;

export const TransferExchangeStep1: React.FC<Props> = ({ handleSubmit, getRates }) => {
  const { t } = useTranslation();

  const [isShownDropDown, setShownDropDown] = useState<IDropDownShownState>({ transfer: false, receiving: false });
  const [currencyState, setCurrencyState] = useState<ICurrencyCodeState>({ transfer: 'EUR', receiving: 'USD' });

  useEffect(() => {
    getRates();
  }, []);

  const shownDropdown = (key: string) => {
    const nextKey = pipe<any[], any, any>(
      filter((n) => n[0] !== key),
      pathOr(isShownDropDown.transfer, [0, 0]),
    )(toPairs(isShownDropDown));

    if (isShownDropDown[nextKey] && !isShownDropDown[key]) {
      setShownDropDown({ [key]: !isShownDropDown[key], [nextKey]: !isShownDropDown[nextKey] });
    } else {
      setShownDropDown({ ...isShownDropDown, [key]: !isShownDropDown[key] });
    }
  };

  const onShownTransfer = () => shownDropdown('transfer');
  const onShownReceiving = () => shownDropdown('receiving');

  const onCurrencyChecked = (key: string, code: string) => setCurrencyState({ ...currencyState, [key]: code });

  const currenciesCodeBlock = (type: string) =>
    CURRENCIES_IN_PROJECT.map(({ code }) => {
      const onCheckCurrency = () => onCurrencyChecked(type, code);
      return (
        <CurrencyCode key={code}>
          <CheckBox onCheck={onCheckCurrency} isChecked={currencyState[type] === code}>
            <span>{code}</span>
          </CheckBox>
        </CurrencyCode>
      );
    });

  return (
    <ExchangeBox>
      <Title>{t('Transfer / Exchange')}</Title>
      <InputBox>
        <SingleTextInput
          validateFns={[isNotZero, isRequired('Amount')]}
          format={formatAmount}
          normalize={normalizeAmount}
          placeholder="Enter the amount"
          name="amount"
        />
        <DropDown
          isShown={isShownDropDown.transfer}
          render={<DropDownContainer>{currenciesCodeBlock('transfer')}</DropDownContainer>}
        >
          <DropDownButton onClick={onShownTransfer}>
            {currencyState.transfer}
            <i className="fas fa-chevron-down" />
          </DropDownButton>
        </DropDown>
      </InputBox>
      <ExchangeArrow>
        <Circle />
      </ExchangeArrow>
      <InputBox>
        115,81
        <DropDown
          isShown={isShownDropDown.receiving}
          render={<DropDownContainer>{currenciesCodeBlock('receiving')}</DropDownContainer>}
        >
          <DropDownButton onClick={onShownReceiving}>
            {currencyState.receiving}
            <i className="fas fa-chevron-down" />
          </DropDownButton>
        </DropDown>
      </InputBox>
      <NextBtnBox>
        <NextBtn type="submit" onClick={handleSubmit}>
          {t('Next')}
        </NextBtn>
      </NextBtnBox>
    </ExchangeBox>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: () => {
    dispatch(nextStep);
  },
  getRates: () => dispatch(getExchangeRates),
});

const TransferExchangeStep1Form = reduxForm<IFormData, ITransferStep1Props>({
  form: 'transferToExchangeForm',
})(TransferExchangeStep1);

export default connect(
  null,
  mapDispatchToProps,
)(TransferExchangeStep1Form);
