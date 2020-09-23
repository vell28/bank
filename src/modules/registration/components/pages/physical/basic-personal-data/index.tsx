import React from 'react';
import { InjectedFormProps, reduxForm, Field } from 'redux-form';
import { useTranslation } from 'react-i18next';

import {
  emailRequired, genderRequired, birthCountryRequired, birthPlaceRequired
} from 'utils/required-names';
import { IFieldsType, Gender } from '../../../../models/registration/entities';
import { IBasicPersonalDataFromData } from '../../../../models/pages/physical/basic-personal-data/entities';
import { Checkbox, CheckboxLine } from '../../../common/checkbox';
import {
  FormGroup, Column, ErrorColumn, Row
} from '../../../common/form-group';
import { FormLabel } from '../../../common/form-label';
import { NextButton } from '../../../common/next-button';
import { SelectCountry } from '../../../common/select-country';
import { TextInputField } from '../../../common/text-input';
import {
  PageOuter, StepDescription, PageContent, NextButtonLine
} from '../../../page-content';

interface IPageProps {
  isGenderFieldIdScanError: boolean;
  fieldsErrors: IFieldsType;
}

type Props = InjectedFormProps<IBasicPersonalDataFromData, IPageProps> & IPageProps;

/* tslint:disable:jsx-no-lambda */
export const BasicPersonalData: React.FC<Props> = ({ isGenderFieldIdScanError, fieldsErrors, handleSubmit }) => {
  const { t } = useTranslation();
  return (
    <PageOuter>
      <StepDescription>
        {t('Please, fill in all fields to continue. Permitted characters are ‘A-z 0-9’')}
      </StepDescription>
      <PageContent>
        <FormGroup>
          <FormLabel hasError={fieldsErrors.email}>{t('Email')}</FormLabel>
          <Row>
            <Column>
              <Field
                component={TextInputField}
                validate={[emailRequired]}
                placeholder={t('Enter email')}
                name="email"
                type="text"
              />
            </Column>
            {fieldsErrors.email && <ErrorColumn>{t(fieldsErrors.email)}</ErrorColumn>}
          </Row>
        </FormGroup>
        <FormGroup>
          <FormLabel hasError={fieldsErrors.gender}>{t('Gender')}</FormLabel>
          <Row>
            <Column>
              <Field
                name="gender"
                component={({ input }: any) => (
                  <CheckboxLine>
                    <Checkbox
                      checked={input.value === Gender.MALE}
                      onChange={() => input.onChange(Gender.MALE)}
                      hasError={!!fieldsErrors.gender}
                    >
                      {t('Male')}
                    </Checkbox>
                    <Checkbox
                      checked={input.value === Gender.FEMALE}
                      onChange={() => input.onChange(Gender.FEMALE)}
                      hasError={!!fieldsErrors.gender}
                    >
                      {t('Female')}
                    </Checkbox>
                  </CheckboxLine>
                )}
                validate={[genderRequired]}
              />
            </Column>
            {fieldsErrors.gender ? (
              <ErrorColumn>{t(fieldsErrors.gender)}</ErrorColumn>
            ) : isGenderFieldIdScanError ? (
              <ErrorColumn>{t('Does not match passport data')}</ErrorColumn>
            ) : null}
          </Row>
        </FormGroup>
        <FormGroup>
          <FormLabel hasError={fieldsErrors.birthCountryCode}>{t('Birth country')}</FormLabel>
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
                validate={[birthCountryRequired]}
                name="birthCountryCode"
              />
            </Column>
            {fieldsErrors.birthCountryCode && <ErrorColumn>{t(fieldsErrors.birthCountryCode)}</ErrorColumn>}
          </Row>
        </FormGroup>
        <FormGroup>
          <FormLabel hasError={fieldsErrors.birthPlace}>{t('Place of birth')}</FormLabel>
          <Row>
            <Column>
              <Field
                component={TextInputField}
                validate={[birthPlaceRequired]}
                placeholder={t('Enter place of birth')}
                name="birthPlace"
                type="text"
              />
            </Column>
            {fieldsErrors.birthPlace && <ErrorColumn>{t(fieldsErrors.birthPlace)}</ErrorColumn>}
          </Row>
        </FormGroup>
        <FormGroup>
          <FormLabel>{t('Name on the card')}</FormLabel>
          <Row>
            <Column>
              <Field component={TextInputField} placeholder={t('Enter name')} name="nameOnCard" type="text" />
            </Column>
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

export default reduxForm<IBasicPersonalDataFromData, IPageProps>({
  form: 'basicPersonalDataPageForm',
})(BasicPersonalData);
