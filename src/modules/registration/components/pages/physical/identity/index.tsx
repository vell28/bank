import React, { useEffect } from 'react';
import { toPairs } from 'ramda';
import { useTranslation } from 'react-i18next';
import { InjectedFormProps, reduxForm, Field } from 'redux-form';

import {
  citizenshipRequired,
  documentNumberRequired,
  documentTypeRequired,
  issuerRequired,
  issueDateRequired,
  expiryDateRequired,
} from 'utils/required-names';
import { IIdentityFormData } from '../../../../models/pages/physical/identity/entities';
import { DocumentTypes, IFieldsType } from '../../../../models/registration/entities';
import { DateInputField } from '../../../common/date-input';
import {
  FormGroup, FormGroupLine, LineGroup, Row, Column, ErrorColumn
} from '../../../common/form-group';
import { FormLabel } from '../../../common/form-label';
import { NextButton } from '../../../common/next-button';
import { SelectField, ISelectOption } from '../../../common/select';
import { SelectCountry } from '../../../common/select-country';
import { TextInputField } from '../../../common/text-input';
import {
  PageOuter, StepDescription, PageContent, NextButtonLine
} from '../../../page-content';
import { setPickerDate } from '../../../../utils/setPickerDate';
import { Checkbox } from '../../../common/checkbox';
import { CheckBoxLabel } from './elements';

interface IPageProps {
  isDocumentNumberFieldIdScanError: boolean;
  isExpiryDateFieldIdScanError: boolean;
  isNoExpired: boolean;
  expiryDate: null | string;
  fieldsErrors: IFieldsType;
  onFieldChange: (form: string, field: string, value: any) => void;
}

const documentTypeOptions: ISelectOption[] = toPairs(DocumentTypes).map(([value, label]) => ({
  label,
  value,
}));

type Props = InjectedFormProps<IIdentityFormData, IPageProps> & IPageProps;

/* tslint:disable:jsx-no-lambda */
export const Identity: React.FC<Props> = ({
  isDocumentNumberFieldIdScanError,
  isExpiryDateFieldIdScanError,
  expiryDate,
  isNoExpired,
  fieldsErrors,
  handleSubmit,
  onFieldChange,
}) => {
  useEffect(
    () => {
      if (expiryDate) {
        onFieldChange('identityPageForm', 'expiryDate', '');
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isNoExpired],
  );

  const { t } = useTranslation();
  const maxExpiryYear = 60;
  return (
    <PageOuter>
      <StepDescription>{t('Identity information. Permitted characters are ‘A-z 0-9’')}</StepDescription>
      <PageContent>
        <FormGroup>
          <FormLabel hasError={fieldsErrors.citizenshipCountryCode}>{t('Citizenship')}</FormLabel>
          <Row>
            <Column>
              <Field
                component={({ input, meta }: any) => (
                  <SelectCountry
                    placeholder={t('Select your citizenship')}
                    value={input.value}
                    onChange={(country) => input.onChange(country.code)}
                    hasError={meta.touched && meta.error}
                  />
                )}
                validate={[citizenshipRequired]}
                name="citizenshipCountryCode"
              />
            </Column>
            {fieldsErrors.citizenshipCountryCode && <ErrorColumn>{t(fieldsErrors.citizenshipCountryCode)}</ErrorColumn>}
          </Row>
        </FormGroup>
        <FormGroup>
          <FormLabel hasError={fieldsErrors.documentType}>{t('Type')}</FormLabel>
          <Row>
            <Column>
              <Field
                component={SelectField}
                validate={[documentTypeRequired]}
                placeholder={t('Select document type')}
                name="documentType"
              >
                {documentTypeOptions.map((documentType) => (
                  <option key={documentType.value} value={documentType.value}>
                    {documentType.label}
                  </option>
                ))}
              </Field>
            </Column>
            {fieldsErrors.documentType && <ErrorColumn>{t(fieldsErrors.documentType)}</ErrorColumn>}
          </Row>
        </FormGroup>
        <FormGroup>
          <FormLabel hasError={fieldsErrors.documentNumber}>{t('Identity document number')}</FormLabel>
          <Row>
            <Column>
              <Field
                component={TextInputField}
                validate={[documentNumberRequired]}
                placeholder={t('Enter identity document number')}
                name="documentNumber"
                type="text"
              />
            </Column>
            {fieldsErrors.documentNumber ? (
              <ErrorColumn>{t(fieldsErrors.documentNumber)}</ErrorColumn>
            ) : isDocumentNumberFieldIdScanError ? (
              <ErrorColumn>{t('Does not match passport data')}</ErrorColumn>
            ) : null}
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Column>
              <FormGroupLine>
                <LineGroup>
                  <FormLabel hasError={fieldsErrors.issueDate}>{t('Issue date')}</FormLabel>
                  <Field
                    component={DateInputField}
                    validate={[issueDateRequired]}
                    placeholder={t('Enter date')}
                    name="issueDate"
                  />
                </LineGroup>
                <LineGroup isDisabled={isNoExpired}>
                  <FormLabel hasError={fieldsErrors.expiryDate}>{t('Expiry date')}</FormLabel>
                  <Field
                    component={DateInputField}
                    validate={!isNoExpired ? [expiryDateRequired] : []}
                    placeholder={t('Enter date')}
                    name="expiryDate"
                    maxDate={setPickerDate(maxExpiryYear)}
                  />
                </LineGroup>
              </FormGroupLine>
            </Column>
            <ErrorColumn group>
              {fieldsErrors.issueDate && <div>{t(fieldsErrors.issueDate)}</div>}
              {fieldsErrors.expiryDate ? (
                <div>{t(fieldsErrors.expiryDate)}</div>
              ) : isExpiryDateFieldIdScanError && !isNoExpired ? (
                <div>{t('Expiry date not match passport data')}</div>
              ) : null}
            </ErrorColumn>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Field
              name="isNoExpired"
              component={({ input }: any) => (
                <Checkbox checked={input.value} onChange={() => input.onChange(!input.value)}>
                  <CheckBoxLabel>{t('My document has no expired date')}</CheckBoxLabel>
                </Checkbox>
              )}
            />
          </Row>
        </FormGroup>
        <FormGroup>
          <FormLabel hasError={fieldsErrors.issuer}>{t('Issuer')}</FormLabel>
          <Row>
            <Column>
              <Field
                component={TextInputField}
                validate={[issuerRequired]}
                placeholder={t('Enter issuer organization name')}
                name="issuer"
                type="text"
              />
            </Column>
            {fieldsErrors.issuer && <ErrorColumn>{t(fieldsErrors.issuer)}</ErrorColumn>}
          </Row>
        </FormGroup>
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

export default reduxForm<IIdentityFormData, IPageProps>({
  form: 'identityPageForm',
})(Identity);
