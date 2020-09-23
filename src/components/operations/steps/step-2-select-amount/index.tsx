import React from 'react';
import { useTranslation } from 'react-i18next';
import { propOr } from 'ramda';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { SpinnerWrapper } from '@components/spinner';

import { isNotZero, isRequired, isNotMaxAmount } from 'utils/redux-form/redux-form';
import { formatAmount, normalizeAmount } from 'utils/redux-form/formatter';

import { IBalance } from 'models/organizations/entities';
import { SingleTextInput } from '../../../redux-form/single-text-input';
import { NextBtn } from '../../../common/button/next/elements';
import {
  Box, Title, NextBtnBox, TextInputBox
} from '../elements';

export interface IAmountFormData {
  value: string;
}

interface ITransferStep2Props {
  balance?: IBalance;
  isLoading?: boolean;
  title?: string;
  onNext?: (value: IAmountFormData) => void;
}

type Props = InjectedFormProps<IAmountFormData, ITransferStep2Props> & ITransferStep2Props;

export const SelectAmountStep: React.FC<Props> = ({
  isLoading = false,
  onNext = () => null,
  handleSubmit,
  title = 'Transfer / Card',
  balance,
}) => {
  const { t } = useTranslation();
  const maxAmount: number = propOr(0, 'balance')(balance);
  const currency: string = propOr('', 'currency')(balance);
  return (
    <Box>
      <Title>{t(title)}</Title>
      <TextInputBox>
        <SingleTextInput
          title="Transfer amount"
          label={currency}
          isLoading={isLoading}
          placeholder="00.00"
          validateFns={[isNotZero, isRequired('Amount'), isNotMaxAmount(maxAmount)]}
          maxLength={15}
          format={formatAmount}
          normalize={normalizeAmount}
        />
      </TextInputBox>
      <NextBtnBox>
        <NextBtn onClick={handleSubmit(onNext)} isLoading={isLoading}>
          <SpinnerWrapper isLoading={isLoading}>
            {' '}
            {t('Next')}
          </SpinnerWrapper>
        </NextBtn>
      </NextBtnBox>
    </Box>
  );
};

export default reduxForm<IAmountFormData, ITransferStep2Props>({
  form: 'selectAmountForm',
})(SelectAmountStep);
