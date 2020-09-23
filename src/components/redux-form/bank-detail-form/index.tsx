import React, { useState } from 'react';
import { InjectedFormProps, reduxForm, Field } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { IBankData } from 'models/operations/transfer/entities';

import { commentReplace, isValidMinLength, validateBeneficiary } from 'utils/redux-form/redux-form';
import {
  ibanRequired,
  beneficNameRequired,
  countryRequired,
  cityRequired,
  isRequiredAddress,
  isRequiredSwiftCode,
  bankNameRequired,
  intermediarySwiftRequired,
  intermediaryBankRequired,
  intermediaryAccountRequired,
  comissionTypeRequired,
  urgencyRequired,
} from 'utils/required-names';
import { PopupSelectCountry } from '@components/popup/popup-select-country';
import { ICountry } from '@components/popup/popup-select-country/country-list';
import { commissionOptions, urgencyOptions } from './const';
import { NextBtnBox } from './elements';
import { NextBtn } from '../../common/button/next/elements';
import { Toggle } from '../../common/form/toggle';
import { BothSideLine } from '../../common/form/elements';
import { TextInputTopUp } from '../../common/form/text-input-topup';
import { SelectInput } from '../../common/form/select-input';

interface IBankTransferProps {
  isIntermediaryBank?: boolean;
  isSwiftRequisites?: boolean;
  isLoading?: boolean;
  onSubmit: (values: IBankData) => any;
}

type Props = InjectedFormProps<IBankData, IBankTransferProps> & IBankTransferProps;

/* tslint:disable:jsx-no-lambda */
export const BankTransferForm: React.FC<Props> = ({
  isSwiftRequisites,
  isIntermediaryBank,
  handleSubmit,
  error,
  isLoading = false,
  onSubmit,
  change,
}) => {
  const { t } = useTranslation();
  const [isShown, setShown] = useState(false);
  const [country, setCountry] = useState<ICountry>({});

  const toggle = () => setShown(!isShown);
  const onSetCountry = (newCountry: ICountry) => {
    setCountry(newCountry);
    toggle();
    change('country', newCountry.name);
  };

  const onFormSubmit = (values: IBankData) =>
    onSubmit({
      ...values,
      country: country.code,
    });

  return (
    <>
      <BothSideLine>
        <Field
          component={TextInputTopUp}
          label="Beneficiary name"
          placeholder="Enter the name of benificiary"
          name="beneficiaryName"
          validate={[beneficNameRequired, isValidMinLength(4), validateBeneficiary]}
          maxLength={128}
          type="text"
          serverError={error}
          bold
        />
      </BothSideLine>
      <BothSideLine>
        <Field
          component={TextInputTopUp}
          label="Account number / IBAN"
          placeholder="Enter the account number / IBAN"
          name="iban"
          validate={[ibanRequired]}
          maxLength={34}
          type="text"
          serverError={error}
          bold
        />
      </BothSideLine>
      {isSwiftRequisites && (
        <>
          <BothSideLine onClick={toggle}>
            <Field
              component={TextInputTopUp}
              label="Country"
              placeholder="Select the country of beneficiary"
              validate={[countryRequired]}
              name="country"
            />
          </BothSideLine>
          <BothSideLine>
            <Field
              component={TextInputTopUp}
              label="City"
              placeholder="Enter the city of beneficiary"
              validate={[cityRequired]}
              name="city"
              type="text"
              serverError={error}
              bold
            />
          </BothSideLine>
          <BothSideLine>
            <Field
              component={TextInputTopUp}
              label="Address"
              placeholder="Enter the address of beneficiary"
              validate={[isRequiredAddress]}
              name="address"
              type="text"
              serverError={error}
              bold
            />
          </BothSideLine>
          <BothSideLine>
            <Field
              component={TextInputTopUp}
              label="SWIFT/BIC"
              placeholder="Enter the SWIFT/BIC code"
              validate={[isRequiredSwiftCode]}
              name="swiftCode"
              type="text"
              serverError={error}
              bold
            />
          </BothSideLine>
          <BothSideLine>
            <Field
              component={TextInputTopUp}
              label="Bank name"
              placeholder="Enter the name of bank"
              validate={[bankNameRequired]}
              name="beneficiaryBank"
              type="text"
              serverError={error}
              bold
            />
          </BothSideLine>
          <BothSideLine>
            <Field component={Toggle} name="isIntermediaryBank" defaultValue placeholder="Intermediary bank" />
          </BothSideLine>
          {isIntermediaryBank && (
            <>
              <BothSideLine>
                <Field
                  component={TextInputTopUp}
                  label="Intermediary SWIFT"
                  placeholder="Enter the intermediary SWIFT code"
                  validate={[intermediarySwiftRequired]}
                  name="intermediarySwift"
                  type="text"
                  serverError={error}
                  bold
                />
              </BothSideLine>
              <BothSideLine>
                <Field
                  component={TextInputTopUp}
                  label="Intermediary bank name"
                  placeholder="Enter the name of intermediary bank"
                  validate={[intermediaryBankRequired]}
                  name="intermediaryBank"
                  type="text"
                  serverError={error}
                  bold
                />
              </BothSideLine>
              <BothSideLine>
                <Field
                  component={TextInputTopUp}
                  label="Intermediary bank account"
                  placeholder="Enter intermediary bank account"
                  validate={[intermediaryAccountRequired]}
                  name="intermediaryAccount"
                  type="text"
                  serverError={error}
                  bold
                />
              </BothSideLine>
            </>
          )}
          <BothSideLine>
            <Field
              component={SelectInput}
              label="Fee type"
              placeholder="Select fee type"
              validate={[comissionTypeRequired]}
              name="commissionType"
              options={commissionOptions}
              serverError={error}
              bold
            />
          </BothSideLine>
          <BothSideLine>
            <Field
              component={SelectInput}
              label="Urgency"
              placeholder="Select urgency"
              validate={[urgencyRequired]}
              name="urgency"
              options={urgencyOptions}
              serverError={error}
              bold
            />
          </BothSideLine>
        </>
      )}
      <BothSideLine>
        <Field
          component={TextInputTopUp}
          label="Description of payment"
          placeholder="Enter the payment description"
          normalize={commentReplace}
          name="purpose"
          type="text"
          serverError={error}
          bold
        />
      </BothSideLine>
      <BothSideLine>
        <Field
          component={TextInputTopUp}
          label="Transfer details (Optional)"
          placeholder="Enter the transfer details"
          name="transferDetails"
          type="text"
          serverError={error}
          bold
        />
      </BothSideLine>
      <NextBtnBox>
        <NextBtn onClick={handleSubmit(onFormSubmit)} isLoading={isLoading} type="submit">
          {t('Next')}
        </NextBtn>
      </NextBtnBox>

      <PopupSelectCountry
        isShown={isShown}
        onCancel={toggle}
        selectedCountry={country}
        onSelect={onSetCountry}
        showCode={false}
      />
    </>
  );
};

export default reduxForm<IBankData, IBankTransferProps>({
  form: 'bankTransferForm',
})(BankTransferForm);
/* tslint:enable:jsx-no-lambda */
