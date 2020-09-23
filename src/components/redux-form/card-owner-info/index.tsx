import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { ICardOrderOwner } from 'models/operations/order-card/entities';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { IStore } from 'modules/store/types';
import { CardProductType } from 'models/operations/card-settings/entities';
import { selectCardOwner } from '../../../models/operations/order-card';
import { CardOwnerForm } from './card-owner-form/card-owner-form';
import { CardOwnerInfoNextBtn, NextBtnBox } from './elements';

export interface ICardOwnerFormProps {
  productType?: CardProductType;
}

type Props = InjectedFormProps<ICardOrderOwner, ICardOwnerFormProps> & ICardOwnerFormProps;

const CardOwnerInfo: React.FC<Props> = ({ handleSubmit, productType }) => {
  const { t } = useTranslation();
  return (
    <>
      <CardOwnerForm productType={productType} />
      <NextBtnBox>
        <CardOwnerInfoNextBtn onClick={handleSubmit} isDisabled={false}>
          {t('Next')}
        </CardOwnerInfoNextBtn>
      </NextBtnBox>
    </>
  );
};

const CardOwnerInfoForm = reduxForm<ICardOrderOwner, ICardOwnerFormProps>({
  form: 'CardOwnerInfoForm',
})(CardOwnerInfo);

interface ICardOwnerFormInitialValues {
  initialValues: ICardOrderOwner;
}

const mapStateToInitialValues = (state: IStore): ICardOwnerFormInitialValues => ({
  initialValues: selectCardOwner(state),
});

const InitializedCardOwnerInfoForm = connect(mapStateToInitialValues)(CardOwnerInfoForm);
export default InitializedCardOwnerInfoForm;
