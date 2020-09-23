import React from 'react';
import {
  InjectedFormProps, reduxForm, Field, FormSection
} from 'redux-form';
import { useTranslation } from 'react-i18next';

import { countryRequired, isRequiredCity } from 'utils/required-names';
import {
  IPersonalAddressFormData,
  IPersonalAddressData,
} from '../../../../models/pages/physical/personal-address/entities';
import { IFieldsType } from '../../../../models/registration/entities';
import { Checkbox } from '../../../common/checkbox';
import {
  FormGroup, FormGroupLine, LineGroup, Row, Column, ErrorColumn
} from '../../../common/form-group';
import { FormLabel } from '../../../common/form-label';
import { NextButton } from '../../../common/next-button';
import { SelectCountry } from '../../../common/select-country';
import { TextInputField } from '../../../common/text-input';
import {
  PageOuter, StepDescription, PageContent, NextButtonLine
} from '../../../page-content';
import { Ok, DeliveryTextarea } from './elements';
import { DeliveryAddress } from './delivery-address';
import { getAddress } from './utils';

interface IPageProps {
  fieldsErrors: IFieldsType;
  isResidence: boolean;
  addressDeliver: IPersonalAddressData;
}

type Props = InjectedFormProps<IPersonalAddressFormData, IPageProps> & IPageProps;

/* tslint:disable:jsx-no-lambda */
export const PersonalAddress: React.FC<Props> = ({
  handleSubmit, fieldsErrors, isResidence, addressDeliver
}) => {
  const { deliveryAddress } = addressDeliver;

  const { t } = useTranslation();

  return (
    <PageOuter>
      <StepDescription>{t('Residence information. Permitted characters are ‘A-z 0-9’')}</StepDescription>
      <PageContent>
        <FormGroup>
          <FormLabel hasError={fieldsErrors.countryCode}>{t('Residence country')}</FormLabel>
          <Row>
            <Column>
              <Field
                component={({ input, meta }: any) => (
                  <SelectCountry
                    placeholder={t('Select country')}
                    value={input.value}
                    onChange={(country) => input.onChange(country.code)}
                    hasError={meta.touched && meta.error}
                  />
                )}
                validate={[countryRequired]}
                name="countryCode"
              />
            </Column>
            {fieldsErrors.countryCode && <ErrorColumn>{t(fieldsErrors.countryCode)}</ErrorColumn>}
          </Row>
        </FormGroup>
        <FormGroup>
          <FormLabel>{t('Street')}</FormLabel>
          <Row>
            <Column>
              <Field component={TextInputField} placeholder={t('Enter street')} name="street" type="text" />
            </Column>
          </Row>
        </FormGroup>
        <FormGroup>
          <Column>
            <FormGroupLine>
              <LineGroup>
                <FormLabel>{t('House number')}</FormLabel>
                <Field component={TextInputField} placeholder={t('e.g. 17')} name="houseNumber" type="text" />
              </LineGroup>
              <LineGroup>
                <FormLabel>{t('Apartment number')}</FormLabel>
                <Field component={TextInputField} placeholder={t('(optional)')} name="apartmentNumber" type="number" />
              </LineGroup>
            </FormGroupLine>
          </Column>
        </FormGroup>
        <FormGroup>
          <FormLabel hasError={fieldsErrors.city}>{t('City')}</FormLabel>
          <Row>
            <Column>
              <Field
                component={TextInputField}
                validate={[isRequiredCity]}
                placeholder={t('Residence city')}
                name="city"
                type="text"
              />
            </Column>
            {fieldsErrors.city && <ErrorColumn>{t(fieldsErrors.city)}</ErrorColumn>}
          </Row>
        </FormGroup>
        <FormGroup>
          <Column>
            <FormGroupLine>
              <LineGroup>
                <FormLabel>{t('Province')}</FormLabel>
                <Field component={TextInputField} placeholder={t('(optional)')} name="province" type="text" />
              </LineGroup>
              <LineGroup>
                <FormLabel>{t('Residence postal code')}</FormLabel>
                <Field component={TextInputField} placeholder={t('Enter code')} name="postalCode" type="text" />
              </LineGroup>
            </FormGroupLine>
          </Column>
        </FormGroup>
        <StepDescription>{t('Card delivery information')}</StepDescription>
        <FormGroup>
          <Field
            name="isResidence"
            component={({ input }: any) => (
              <Checkbox checked={input.value === true} onChange={() => input.onChange(!input.value)}>
                {t('Send card to the residence address')}
              </Checkbox>
            )}
          />
        </FormGroup>
        <FormGroup>
          <Field
            name="isResidence"
            component={({ input }: any) => (
              <Checkbox checked={input.value === false} onChange={() => input.onChange(!input.value)}>
                {t('Send card to the other address')}
              </Checkbox>
            )}
          />
        </FormGroup>
        {isResidence ? (
          <FormGroup>
            <FormLabel>{t('Card will be delivered to:')}</FormLabel>
            <Row>
              <Column>
                <DeliveryTextarea
                  placeholder={t('Delivery information will appear here, after entering the data above')}
                  value={getAddress(addressDeliver).address}
                  readOnly
                />
                <Ok isFullAddress={getAddress(addressDeliver).isFullAddress} />
              </Column>
            </Row>
          </FormGroup>
        ) : (
          <FormSection name="deliveryAddress">
            <DeliveryAddress fieldsErrors={fieldsErrors} deliveryAddress={deliveryAddress} />
          </FormSection>
        )}
      </PageContent>
      <NextButtonLine>
        <NextButton onClick={handleSubmit} arrow>
          {t('Next')}
        </NextButton>
      </NextButtonLine>
    </PageOuter>
  );
};
/* tslint:enable:jsx-no-lambda */

export default reduxForm<IPersonalAddressFormData, IPageProps>({
  form: 'personalAddressPageForm',
})(PersonalAddress);
