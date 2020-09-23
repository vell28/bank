import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { SingleTextInput } from 'components/redux-form/single-text-input';
import {
  Box,
  Title,
  DescriptionTitle,
  NextBtn,
  NextBtnBox,
  SingleInputBox,
} from 'components/operations/steps/elements';
import { updateTopUp } from 'models/operations/top-up/redux/actions';
import { nextStep } from 'models/main-modal/redux/actions';
import { isNotZero, isRequired, commentReplace } from 'utils/redux-form/redux-form';
import { getCurrentCurrencyBalance } from 'models/organizations/redux/selectors';
import { formatAmount, normalizeAmount } from 'utils/redux-form/formatter';

import { IStore } from 'modules/store/types';
import { IBalance } from 'models/organizations/entities';
import { propOr } from 'ramda';

interface IFormData {
  value: string;
  description: string;
}

interface ITopUpRequestStep1 {
  balance?: IBalance;
  isLoading?: boolean;
  onSubmit: (value: IFormData) => void;
}

type Props = InjectedFormProps<IFormData, ITopUpRequestStep1> & ITopUpRequestStep1;

const TopUpRequestStep1: React.FC<Props> = ({ balance, isLoading, handleSubmit }) => {
  const { t } = useTranslation();
  const descriptionTitle = <DescriptionTitle>{t('Purpose of payment')}</DescriptionTitle>;
  const currency: string = propOr('', 'currency')(balance);
  return (
    <Box>
      <Title>{t('Top Up / Request')}</Title>
      <SingleInputBox>
        <SingleTextInput
          title="Request amount"
          label={currency}
          isLoading={isLoading}
          validateFns={[isNotZero, isRequired('Amount')]}
          format={formatAmount}
          normalize={normalizeAmount}
          placeholder="0.00"
        />
      </SingleInputBox>
      <SingleInputBox>
        <SingleTextInput
          title={descriptionTitle}
          isLoading={isLoading}
          maxLength={105}
          normalize={commentReplace}
          name="description"
          type="text"
          placeholder={t('Enter purpose of payment')}
        />
      </SingleInputBox>
      <NextBtnBox>
        <NextBtn type="submit" onClick={handleSubmit}>
          {t('Next')}
        </NextBtn>
      </NextBtnBox>
    </Box>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: ({ value, description }: IFormData) => {
    dispatch(updateTopUp(value, description));
    dispatch(nextStep);
  },
});

export const mapStateToProps = (store: IStore) => ({
  balance: getCurrentCurrencyBalance(store),
});

const TopUpRequestStep1Form = reduxForm<IFormData, ITopUpRequestStep1>({
  form: 'topUpRequestStep1Form',
})(TopUpRequestStep1);

export default connect(mapStateToProps, mapDispatchToProps)(TopUpRequestStep1Form);
