import React from 'react';
import { InjectedFormProps, reduxForm, Field } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { nameRequired, surnameRequired, dateOfBirthRequired } from 'utils/required-names';
import { IFieldsType } from '../../../../models/registration/entities';
import { IPersonalIdentificationFormData } from '../../../../models/pages/physical/personal-identification/entities';
import { DateInputField } from '../../../common/date-input';
import {
  FormGroup, Row, Column, ErrorColumn
} from '../../../common/form-group';
import { FormLabel } from '../../../common/form-label';
import { NextButton } from '../../../common/next-button';
import { TextInputField } from '../../../common/text-input';
import {
  PageOuter, PageHeader, PageContent, NextButtonLine
} from '../../../page-content';
import { setPickerDate } from '../../../../utils/setPickerDate';
import { MIN_AGE } from '../../../../containers/pages/physical/personal-identification/const';

interface IPageProps {
  isNameFieldIdScanError: boolean;
  isSurnameFieldIdScanError: boolean;
  isBirthDateFieldIdScanError: boolean;
  fieldsErrors: IFieldsType;
}

const notMatch = 'Does not match passport data'

type Props = InjectedFormProps<IPersonalIdentificationFormData, IPageProps> & IPageProps;

const PersonalIdentification: React.FC<Props> = ({
  isNameFieldIdScanError,
  isSurnameFieldIdScanError,
  isBirthDateFieldIdScanError,
  fieldsErrors,
  handleSubmit,
}) => {
  const { t } = useTranslation();

  return (
    <PageOuter>
      <PageHeader>{t('Enter information below')}</PageHeader>
      <PageContent>
        <FormGroup>
          <FormLabel hasError={fieldsErrors.name}>{t('Name')}</FormLabel>
          <Row>
            <Column>
              <Field
                component={TextInputField}
                validate={[nameRequired]}
                placeholder={t('Enter your name')}
                name="name"
                type="text"
              />
            </Column>
            {fieldsErrors.name ? (
              <ErrorColumn>{t(fieldsErrors.name)}</ErrorColumn>
            ) : isNameFieldIdScanError ? (
              <ErrorColumn>{t(notMatch)}</ErrorColumn>
            ) : null}
          </Row>
        </FormGroup>
        <FormGroup>
          <FormLabel hasError={fieldsErrors.surname}>{t('Surname')}</FormLabel>
          <Row>
            <Column>
              <Field
                component={TextInputField}
                validate={[surnameRequired]}
                placeholder={t('Enter your surname')}
                name="surname"
                type="text"
              />
            </Column>
            {fieldsErrors.surname ? (
              <ErrorColumn>{t(fieldsErrors.surname)}</ErrorColumn>
            ) : isSurnameFieldIdScanError ? (
              <ErrorColumn>{t(notMatch)}</ErrorColumn>
            ) : null}
          </Row>
        </FormGroup>
        <FormGroup>
          <FormLabel hasError={fieldsErrors.birthDate}>{t('Date of Birth')}</FormLabel>
          <Row>
            <Column>
              <Field
                component={DateInputField}
                validate={[dateOfBirthRequired]}
                placeholder={t('Enter date of Birth')}
                name="birthDate"
                maxDate={setPickerDate(-MIN_AGE)}
              />
            </Column>
            {fieldsErrors.birthDate ? (
              <ErrorColumn>{t(fieldsErrors.birthDate)}</ErrorColumn>
            ) : isBirthDateFieldIdScanError ? (
              <ErrorColumn>{t(notMatch)}</ErrorColumn>
            ) : null}
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

export default reduxForm<IPersonalIdentificationFormData, IPageProps>({
  form: 'personalIdentificationPageForm',
})(PersonalIdentification);
