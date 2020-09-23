import React from 'react';
import { useTranslation } from 'react-i18next';
import { reduxForm, InjectedFormProps } from 'redux-form';

import { requiredAcceptance } from 'utils/redux-form/redux-form';
import { IOfferFormData } from '../../../models/pages/offer/entities';
import {
  andLabel,
  personalDataConsent,
  iReadAndAgreeLabel,
  iWantRecieveDocuments,
  iAgreeOnLanguage,
  personalDataConsentLabel,
} from './const';
import { BooleanField } from '../../common/boolean-field';
import { Link } from '../../common/link';
import { Container, ActionBlock, CentralTextBlock } from './elements';
import { NewCustomerAgreement } from './new-customer-agreement';
import { RegistrationButton } from './registration-button';
import { IRegistrationOfferProps } from './types';
import { selectNavigationalProps } from './utils';

type Props = InjectedFormProps<IOfferFormData, IRegistrationOfferProps> & IRegistrationOfferProps;

const Offer: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const { handleSubmit } = props;
  const navigationProps = selectNavigationalProps(props);

  const PreContractalInformation = (
    <Link onClick={navigationProps.onPreContractalInformationClick} text={t('Pre-contractual information')} />
  );
  const GeneralTermsAndConditions = (
    <Link onClick={navigationProps.onGeneralTermsAndConditionsClick} text={t('General terms and conditions')} />
  );
  const SecureUsageOfTheCard = (
    <Link onClick={navigationProps.onSecureUsageOfTheCardClick} text={t('Secure usage of the card and the APP')} />
  );
  const PriceList = <Link onClick={navigationProps.onPriceListClick} text={t('Price list')} />;
  const DataProtectionPolicy = (
    <Link onClick={navigationProps.onDataProtectionPolicyClick} text={t('Data protection policy')} />
  );
  return (
    <Container>
      <NewCustomerAgreement {...navigationProps} />
      <ActionBlock>
        <BooleanField name="readAgreement" isSlider={false} validate={requiredAcceptance}>
          <div className="children">
            {iReadAndAgreeLabel}
            {' '}
            {PreContractalInformation}
            {', '}
            {GeneralTermsAndConditions}
            {', '}
            {DataProtectionPolicy}
            {', '}
            {SecureUsageOfTheCard}
            {'and '}
            {PriceList}
            .
          </div>
        </BooleanField>
      </ActionBlock>
      <ActionBlock>
        <BooleanField name="sendDocumentsToEmail" isSlider labelFirst>
          {iWantRecieveDocuments}
        </BooleanField>
      </ActionBlock>
      <CentralTextBlock>{t(andLabel)}</CentralTextBlock>
      <ActionBlock>
        <BooleanField name="languageAgreement" isSlider={false} validate={requiredAcceptance}>
          {iAgreeOnLanguage}
        </BooleanField>
      </ActionBlock>
      <CentralTextBlock>
        {t(andLabel)}
        <br />
        <br />
        {t(personalDataConsent)}
      </CentralTextBlock>
      <ActionBlock>
        <BooleanField name="personalDataAgreement" isSlider={false} validate={requiredAcceptance}>
          {personalDataConsentLabel}
        </BooleanField>
      </ActionBlock>
      <RegistrationButton onClick={handleSubmit} />
    </Container>
  );
};

export default reduxForm<IOfferFormData, IRegistrationOfferProps>({
  form: 'offerPageForm',
})(Offer);
