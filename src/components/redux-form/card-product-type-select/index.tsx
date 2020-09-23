import React from 'react';
import { InjectedFormProps, reduxForm, formValueSelector } from 'redux-form';
import { useTranslation } from 'react-i18next';
import { ICardOrder } from 'models/operations/order-card/entities';
import { connect } from 'react-redux';
import { IStore } from 'modules/store/types';
import { CardProductType } from 'models/operations/card-settings/entities';
import { SelectProductTypeForm } from './select-type-form/select-type-form';
import { NextBtnBox, TypeSelectNextBtn } from './elements';

interface ICardProductTypeFormVMProps {
  productType?: CardProductType;
}

interface ICardProductTypeFormOwnProps {
  accountHasMainCard: boolean;
}

interface IFormProps extends ICardProductTypeFormVMProps, ICardProductTypeFormOwnProps {}

type Props = InjectedFormProps<ICardOrder, IFormProps> & IFormProps;

const CardProductTypeForm: React.FC<Props> = ({ handleSubmit, productType, accountHasMainCard }) => {
  const { t } = useTranslation();
  return (
    <>
      <SelectProductTypeForm productType={productType} accountHasMainCard={accountHasMainCard} />
      <NextBtnBox>
        <TypeSelectNextBtn onClick={handleSubmit} isDisabled={false}>
          {t('Next')}
        </TypeSelectNextBtn>
      </NextBtnBox>
    </>
  );
};

const thisFormSelector = formValueSelector('CardProductTypeForm');

const mapViewModelToProps = (state: IStore): ICardProductTypeFormVMProps => {
  const productType = thisFormSelector(state, 'cardProductType');
  return {
    productType,
  };
};

const ConnectedCardProductTypeForm = connect(mapViewModelToProps)(CardProductTypeForm);

export default reduxForm<ICardOrder, IFormProps>({
  form: 'CardProductTypeForm',
})(ConnectedCardProductTypeForm);
