import React from 'react';
import { useTranslation } from 'react-i18next';
import { InjectedFormProps, reduxForm, Field } from 'redux-form';
import { equals } from 'ramda';

import { Portal } from '@components/portal';
import { PopupDialog } from '@components/popup/popup-overlay';

import { SpinnerWrapper } from '@components/spinner';

import { MAX_FAILED_ATTEMPTS } from 'models/operations/card-settings/redux/actions';
import { isRequiredCode } from 'utils/required-names';
import { smsMask } from 'utils/redux-form/redux-form';
import { setPlaceholder } from 'utils/setPlaceholderForSms';
import { AmountValueField } from '../../../redux-form/single-text-input/fields/text-input';
import { ResendLink } from '../../button/link/elements';
import {
  PopupTitle, PopupDescription, ActionBLock, UnblockBtn, ServerError
} from './elements';

interface ISmsCodeData {
  code: string;
}

interface IPopupProps {
  onCancel?: () => void;
  isShown?: boolean;
  codeLength?: number;
  isLoading?: boolean;
  onResend?: () => void;
  attempts?: number;
  serverErrors?: string;
  hasError?: boolean;
  actionDiscription?: string;
}

type Props = InjectedFormProps<ISmsCodeData> & IPopupProps;

export const PopupSmsConfirm: React.FC<Props> = ({
  handleSubmit,
  isShown = false,
  onCancel = () => null,
  codeLength = 4,
  isLoading = false,
  onResend = () => null,
  hasError,
  attempts,
  actionDiscription,
}) => {
  const { t } = useTranslation();
  const isMaxAttemps = equals(attempts, MAX_FAILED_ATTEMPTS);
  return (
    <Portal>
      <PopupDialog isShown={isShown} onCancel={onCancel} useCloseBtn>
        <>
          <PopupTitle>{t('Sms code')}</PopupTitle>
          <PopupDescription>
            <Field
              component={AmountValueField}
              validate={[isRequiredCode]}
              name="code"
              type="tel"
              mask={smsMask(codeLength)}
              placeholder={setPlaceholder(codeLength)}
              serverError={hasError ? 'error' : ''}
            />
            {hasError && (
              <ServerError>
                {t(isMaxAttemps ? 'attempts exceeded max value' : 'wrong code')}
                <br />
                {t(isMaxAttemps ? 'please try re-send code' : 'please try again')}
              </ServerError>
            )}
          </PopupDescription>
        </>
        <ActionBLock>
          <UnblockBtn onClick={handleSubmit} isLoading={isLoading}>
            <SpinnerWrapper isLoading={isLoading}>{t(actionDiscription || 'Unblock')}</SpinnerWrapper>
          </UnblockBtn>
        </ActionBLock>

        {isMaxAttemps && <ResendLink onClick={onResend}>{t('Re-send code')}</ResendLink>}
      </PopupDialog>
    </Portal>
  );
};

export default reduxForm<ISmsCodeData, IPopupProps>({
  form: 'popupSmsConfirmForm',
})(PopupSmsConfirm);
