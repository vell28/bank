import React from 'react';
import { InjectedFormProps, Field } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { validateCardholder, validateCity } from 'utils/redux-form/redux-form';
import { cardholderRequired, countryRequired, cityRequired } from 'utils/required-names';

import { ICardData } from 'models/operations/transfer/entities';
import { TextInputTopUp } from '../../../common/form/text-input-topup';
import { SwitchBox } from '../elements';
import { Toggle } from '../../../common/form/toggle';

import { ITopUpCardProps } from '..';

type Props = InjectedFormProps<ICardData, ITopUpCardProps> & ITopUpCardProps;

export const FieldsSwitcher: React.FC<Props> = ({ error, isHolder, toggle = () => null }) => {
  const { t } = useTranslation();

  return (
    <>
      <SwitchBox>
        <Field component={Toggle} name="isHolder" defaultValue placeholder={t('This is my card')} />
      </SwitchBox>
      {!isHolder && (
        <>
          <Field
            component={TextInputTopUp}
            label="cardholder"
            placeholder={t('Enter cardholder name')}
            validate={[cardholderRequired, validateCardholder]}
            maxLength="21"
            name="beneficiaryName"
            type="text"
            serverError={error}
          />
          <div onClick={toggle}>
            <Field
              component={TextInputTopUp}
              label="country"
              placeholder="Select the country of beneficiary"
              validate={[countryRequired]}
              name="country"
              serverError={error}
            />
          </div>

          <Field
            component={TextInputTopUp}
            label="city"
            placeholder={t('Enter cardholder’s city')}
            validate={[cityRequired, validateCity]}
            maxLength="25"
            name="city"
            type="text"
            serverError={error}
          />
        </>
      )}
    </>
  );
};
