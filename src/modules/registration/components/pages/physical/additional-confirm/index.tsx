import React from 'react';
import { useTranslation } from 'react-i18next';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { doNothing } from '../../../../utils/doNothing';
import { DateInputField } from '../../../common/date-input';
import { DropableFileInput } from '../../../common/dropable-file-input';
import {
  FormGroup, Row, Column, ErrorColumn
} from '../../../common/form-group';
import { FormLabel } from '../../../common/form-label';
import { Link } from '../../../common/link';
import { NextButton } from '../../../common/next-button';
import { SelectField } from '../../../common/select';
import { RightSide } from '../../../page-box';
import {
  PageOuter, Text, PageContent, NextButtonLine
} from '../../../page-content';
import { employmentTypeOptions, confirmationDocumentOptions, documentEarliestAcceptableDate } from './constants';
import { DatepickerContainer } from './elements';
import { AdditionalInfoFormName, IAdditionalConfirmProps, IAdditionalConfirmFormModel } from './types';

type Props = InjectedFormProps<IAdditionalConfirmFormModel, IAdditionalConfirmProps> & IAdditionalConfirmProps;

/* tslint:disable:jsx-no-lambda */
const AdditionalConfirm: React.FC<Props> = ({
  handleSubmit,
  uploadAddressDocument,
  uploadProofOfWhelthDocument,
  addressDocument,
  wealthProofDocument,
  isAddressDocumentLoading,
  isProofOfWhelthDocumentLoading,
  clearAddressDocument,
  clearProofOfWhelthDocument,
}) => {
  const { t } = useTranslation();

  return (
    <RightSide>
      <PageOuter>
        <PageContent>
          <FormGroup>
            <Row>
              <Column>
                <Text>
                  {t(
                    'For approval by the Bank of your registration in the application, additional information is required',
                  )}
                </Text>
              </Column>
            </Row>
          </FormGroup>
          <FormGroup>
            <FormLabel>{t('What is your occupation?')}</FormLabel>
            <Row>
              <Column>
                <Field component={SelectField} placeholder={t('Select occupation type')} name="employmentType">
                  {employmentTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
              </Column>
            </Row>
          </FormGroup>
          <FormGroup>
            <FormLabel>{t('Address confirmation document')}</FormLabel>
            <Row>
              <Column>
                <Field component={SelectField} placeholder={t('Select confirmation document')} name="documentType">
                  {confirmationDocumentOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
              </Column>
              <ErrorColumn>
                <Link text={t('Which documents are accepted?')} onClick={doNothing} />
              </ErrorColumn>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Column>
                <DatepickerContainer>
                  <FormLabel>{t('Document issue date')}</FormLabel>
                  <Field
                    component={DateInputField}
                    validate={null}
                    placeholder={t('Enter date')}
                    name="issueDate"
                    minDate={documentEarliestAcceptableDate}
                    type="text"
                  />
                </DatepickerContainer>
              </Column>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Column>
                <DropableFileInput
                  file={addressDocument}
                  onChange={uploadAddressDocument}
                  onClear={clearAddressDocument}
                  isLoading={isAddressDocumentLoading}
                />
              </Column>
            </Row>
          </FormGroup>
          <FormGroup>
            <FormLabel>{t('Proof of welth')}</FormLabel>
            <Row>
              <Column>
                <DropableFileInput
                  file={wealthProofDocument}
                  onChange={uploadProofOfWhelthDocument}
                  onClear={clearProofOfWhelthDocument}
                  isLoading={isProofOfWhelthDocumentLoading}
                />
              </Column>
            </Row>
          </FormGroup>
        </PageContent>
        <NextButtonLine>
          <NextButton onClick={handleSubmit} arrow>
            {t('Send')}
          </NextButton>
        </NextButtonLine>
      </PageOuter>
    </RightSide>
  );
};
/* tslint:enable:jsx-no-lambda */

export default reduxForm<IAdditionalConfirmFormModel, IAdditionalConfirmProps>({
  form: AdditionalInfoFormName,
})(AdditionalConfirm);
