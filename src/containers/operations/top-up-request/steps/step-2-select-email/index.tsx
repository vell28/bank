import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { SingleTextInput } from 'components/redux-form/single-text-input';
import {
  Box, Title, NextBtn, NextBtnBox, TextInputBox
} from 'components/operations/steps/elements';
import { SpinnerWrapper } from '@components/spinner';

import { updateTopUpRequestAction, sendTopUpRequestAction } from 'models/operations/top-up/redux/actions/request';
import { validateEmail } from 'utils/redux-form/redux-form';
import { emailRequired } from 'utils/required-names';
import { isTopUpLoading } from 'models/operations/top-up/redux/selectors';

import { IStore } from 'modules/store/types';

interface ITopUpRequestStep2 {
  isLoading: boolean;
  onNext: (email: string) => void;
}

interface IFormData {
  email: string;
}

type Props = InjectedFormProps<IFormData, ITopUpRequestStep2> & ITopUpRequestStep2;

const TopUpRequestStep2: React.FC<Props> = ({ onNext, isLoading, handleSubmit }) => {
  const { t } = useTranslation();

  const onSubmit = ({ email }: IFormData) => {
    onNext(email);
  };
  return (
    <Box>
      <Title>{t('Top Up / Request')}</Title>
      <TextInputBox>
        <SingleTextInput
          title="E-mail"
          isLoading={isLoading}
          validateFns={[emailRequired, validateEmail]}
          maxLength={255}
          type="email"
        />
      </TextInputBox>
      <NextBtnBox>
        <NextBtn onClick={handleSubmit(onSubmit)} isLoading={isLoading}>
          <SpinnerWrapper isLoading={isLoading}>
            {' '}
            {t('Next')}
          </SpinnerWrapper>
        </NextBtn>
      </NextBtnBox>
    </Box>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  onNext: async (email: string) => {
    await dispatch(updateTopUpRequestAction(email));
    dispatch(sendTopUpRequestAction);
  },
});

export const mapStateToProps = (store: IStore) => ({
  isLoading: isTopUpLoading(store),
});

const TopUpRequestStep2Form = reduxForm<IFormData, ITopUpRequestStep2>({
  form: 'topUpRequestStep2Form',
})(TopUpRequestStep2);

export default connect(mapStateToProps, mapDispatchToProps)(TopUpRequestStep2Form);
