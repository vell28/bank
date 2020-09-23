import React from 'react';
import { Field } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { countryRequired, isRequiredCity } from 'utils/required-names';
import { IFieldsType } from '../../../../models/registration/entities';
import { IAddressData } from '../../../../models/pages/physical/personal-address/entities';
import { Checkbox } from '../../../common/checkbox';
import {
  FormGroup, FormGroupLine, LineGroup, Row, Column, ErrorColumn
} from '../../../common/form-group';
import { FormLabel } from '../../../common/form-label';
import { SelectCountry } from '../../../common/select-country';
import { TextInputField } from '../../../common/text-input';
import { Ok, DeliveryTextarea } from './elements';
import { getAddress } from './utils';

interface IPageProps {
  fieldsErrors: IFieldsType;
  deliveryAddress: IAddressData;
}

/* tslint:disable:jsx-no-lambda */
export const DeliveryAddress: React.FC<IPageProps> = ({ fieldsErrors, deliveryAddress }) => {
  const { t } = useTranslation();
  return (
    <>
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
      <FormGroup>
        <FormLabel>{t('Card will be delivered to:')}</FormLabel>
        <Row>
          <Column>
            <DeliveryTextarea
              placeholder={t('Delivery information will appear here, after entering the data above')}
              value={getAddress(deliveryAddress).address}
              readOnly
            />
            <Ok isFullAddress={getAddress(deliveryAddress).isFullAddress} />
          </Column>
        </Row>
      </FormGroup>
      <FormGroup>
        <FormLabel>{t('Select one of the delivery options:')}</FormLabel>
        <FormGroup>
          <Field
            name="isExpressDelivery"
            component={({ input }: any) => (
              <Checkbox checked={input.value === false} onChange={() => input.onChange(!input.value)}>
                {t('Standard mail delivery (free)')}
              </Checkbox>
            )}
          />
        </FormGroup>
        <FormGroup>
          <Field
            name="isExpressDelivery"
            component={({ input }: any) => (
              <Checkbox checked={input.value === true} onChange={() => input.onChange(!input.value)}>
                {t('Express delivery (30€)')}
              </Checkbox>
            )}
          />
        </FormGroup>
      </FormGroup>
    </>
  );
};
/* tslint:enable:jsx-no-lambda */
