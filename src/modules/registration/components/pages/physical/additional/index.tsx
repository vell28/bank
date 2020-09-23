import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Field, FormAction, InjectedFormProps, reduxForm
} from 'redux-form';

import { isRequiredConfirmation } from 'utils/required-names';
import { SpinnerWrapper } from '@components/spinner';
import { IAdditionalFormData } from '../../../../models/pages/physical/additional/entities';
import { IFieldsType } from '../../../../models/registration/entities';
import { Checkbox } from '../../../common/checkbox';
import { DropableFileInput } from '../../../common/dropable-file-input';
import { File } from '../../../common/file-input';
import {
  FormGroup, Row, Column, ErrorColumn
} from '../../../common/form-group';
import { FormLabel } from '../../../common/form-label';
import { Link } from '../../../common/link';
import { NextButton } from '../../../common/next-button';
import { PopupWebcam } from '../../../common/popup';
import { TextInputField } from '../../../common/text-input';

import {
  PageOuter, PageContent, StepDescription, Text, NextButtonLine
} from '../../../page-content';
import * as Styled from './elements';

interface IPageProps {
  document: string;
  selfie: string;
  personEntryId: string | null;
  fieldsErrors: IFieldsType;
  isLoading: boolean;
  formChange(form: string, field: string, value: any): FormAction;
  idScanInvestigateDocAction(scan: string): void;
  idScanInvestigateSelfieAction(personId: string, scan: string): void;
}

type Props = InjectedFormProps<IAdditionalFormData, IPageProps> & IPageProps;

/* tslint:disable:jsx-no-lambda */
const Additional: React.FC<Props> = ({
  handleSubmit,
  fieldsErrors,
  formChange,
  document,
  selfie,
  personEntryId,
  idScanInvestigateDocAction,
  idScanInvestigateSelfieAction,
  isLoading,
}) => {
  const [activeField, setActiveField] = useState<string>('document');
  const [isWebcamShow, setIsWebcamShow] = useState<boolean>(false);

  const { t } = useTranslation();

  const toggleWebcam = (name?: string) => {
    if (name) {
      setActiveField(name);
    }
    setIsWebcamShow(!isWebcamShow);
  };

  const getWebcamScan = (scan: any) => {
    formChange('additionalPageForm', activeField, scan);
    if (activeField === 'document') {
      idScanInvestigateDocAction(scan);
    } else if (personEntryId != null) {
      idScanInvestigateSelfieAction(personEntryId, scan);
    }
  };

  /*  const docText = document
    ? 'Main page of your identity document uploaded'
    : 'Click there and scan the main page of your identity document'; */

  const selfieText = selfie ? 'Your selfie uploaded' : 'Click there to take a selfie';

  return (
    <PageOuter>
      <PopupWebcam isShown={isWebcamShow} onCancel={toggleWebcam} onClick={getWebcamScan} />
      <StepDescription>{t('Additional information')}</StepDescription>
      <PageContent>
        <FormGroup>
          <Row>
            <Column>
              <Field
                name="pep"
                component={({ input }: any) => (
                  <Checkbox checked={input.value === true} onChange={() => input.onChange(!input.value)}>
                    {t('I am a politically exposed person')}
                  </Checkbox>
                )}
              />
            </Column>
            <ErrorColumn>
              <Link text={t('Who are politically exposed persons?')} onClick={() => null} />
            </ErrorColumn>
          </Row>
        </FormGroup>
        <FormGroup>
          <Field
            name="pepInFamily"
            component={({ input }: any) => (
              <Checkbox checked={input.value === true} onChange={() => input.onChange(!input.value)}>
                {t('I have a politically exposed person in my family')}
              </Checkbox>
            )}
          />
        </FormGroup>
        <FormGroup>
          <Row>
            <Column>
              <Text>
                {t('Please scan the main page of your identity document and take a selfie to complete registration')}
              </Text>
            </Column>
            <ErrorColumn>
              <Link text={t('How to make photos properly?')} onClick={() => null} />
            </ErrorColumn>
          </Row>
          <Row>
            <Column>
              <Styled.FileWrap>
                <DropableFileInput file={document} onChange={getWebcamScan} />
                <File
                  icon="selfie"
                  name="selfie"
                  text={selfieText}
                  onClick={toggleWebcam}
                  disabled={!document}
                  isFilled={!!selfie}
                />
              </Styled.FileWrap>
            </Column>
            <ErrorColumn group>
              {fieldsErrors.document && <div>{t(fieldsErrors.document)}</div>}
              {fieldsErrors.selfie && <div>{t(fieldsErrors.selfie)}</div>}
            </ErrorColumn>
          </Row>
        </FormGroup>
        <FormGroup>
          <FormLabel>{t('Promo code')}</FormLabel>
          <Row>
            <Column>
              <Field component={TextInputField} placeholder={t('(optional)')} name="promoCode" type="text" />
            </Column>
          </Row>
        </FormGroup>
        <Styled.Confirmation>
          <FormGroup>
            <Row>
              <Column>
                <Field
                  name="isConfirmed"
                  component={({ input }: any) => (
                    <Checkbox
                      checked={input.value === true}
                      onChange={() => input.onChange(!input.value)}
                      hasError={!!fieldsErrors.isConfirmed}
                    >
                      {t('By checking this box, I confirm:')}
                    </Checkbox>
                  )}
                  validate={[isRequiredConfirmation]}
                />
              </Column>
              {fieldsErrors.isConfirmed && <ErrorColumn>{t(fieldsErrors.isConfirmed)}</ErrorColumn>}
            </Row>
          </FormGroup>
          <Styled.ListWrap>
            <Styled.List>
              {t(
                'I am the true Beneficiary of Transactions (the person concerned receiving all interest and other benefits resulting from the Transaction).',
              )}
            </Styled.List>
            <Styled.List>{t('I am an employee and the main income receive as a salary.')}</Styled.List>
            <Styled.List>
              {t(
                'The monthly income does not exceed 10,000 euro. Funds held on the account are supposed for personal purposes.',
              )}
            </Styled.List>
          </Styled.ListWrap>
        </Styled.Confirmation>
      </PageContent>

      <NextButtonLine>
        <NextButton onClick={handleSubmit} disabled={isLoading} arrow>
          <SpinnerWrapper isLoading={isLoading} fill="white">
            {' '}
            {t('Next')}
          </SpinnerWrapper>
        </NextButton>
      </NextButtonLine>
    </PageOuter>
  );
};
/* tslint:enable:jsx-no-lambda */

export default reduxForm<IAdditionalFormData, IPageProps>({
  form: 'additionalPageForm',
})(Additional);
