import React from 'react';
import { InjectedFormProps, reduxForm, Field } from 'redux-form';
import { useTranslation } from 'react-i18next';

import { ICardData } from 'models/operations/transfer/entities';
import { validateComment } from 'utils/redux-form/redux-form';
import { NextBtnBox, CommentTitle, DescriptionInput } from './elements';
import { NextBtn } from '../../common/button/next/elements';

import { CardForm } from '../common/card-form';
import { TextInput } from '../../common/form/text-input';

interface ITransferCardProps {
  title?: string;
  onSubmit: (values: ICardData) => any;
  handleSubmit?: (object: any) => void;
}

type Props = InjectedFormProps<ICardData, ITransferCardProps> & ITransferCardProps;

export const TransferCardForm: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  const { handleSubmit } = props;

  return (
    <>
      <CardForm {...props} useCardholder usePapayaCheck />
      <CommentTitle>
        {t('comment')}
        <span>{t('(optional)')}</span>
      </CommentTitle>
      <DescriptionInput>
        <Field
          component={TextInput}
          name="purpose"
          validate={[validateComment]}
          type="text"
          placeholder={t('Use only A-z 0-9')}
          maxLength={105}
        />
      </DescriptionInput>
      <NextBtnBox>
        <NextBtn onClick={handleSubmit}>{t('Next')}</NextBtn>
      </NextBtnBox>
    </>
  );
};

export default reduxForm<ICardData, ITransferCardProps>({
  form: 'transferCardForm',
})(TransferCardForm);
