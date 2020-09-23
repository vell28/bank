import React from 'react';
import {
  InjectedFormProps, reduxForm, formValueSelector, Field
} from 'redux-form';
import { useTranslation } from 'react-i18next';
import { IStore } from 'modules/store/types';
import { connect } from 'react-redux';
import { CardProductType } from 'models/operations/card-settings/entities';
import {
  NextBtnBox, DeliveryAddressNextBtn, CardAddressContainer, Delimiter, FormContainer
} from './elements';
import { InputAddressForm } from './input-address-form/input-address-form';
import { PreviewAddressForm } from './preview-address-form/show-address-form';
import { IDeliveryAddress } from './types';
import { NewCardPreview } from '../../common/new-card-preview';
import { OrderTitle } from '../common/order-title';
import { IAddress, selectCardOwnerAddress } from '../../../models/operations/order-card';
import { Toggle } from '../../common/form/toggle';

interface IFormProps {
  productType: CardProductType;
  changeDeliveryAddress?: boolean;
  clientAddress: IAddress;
}

type Props = InjectedFormProps<IDeliveryAddress, IFormProps> & IFormProps;

export const CardDelivery: React.FC<Props> = ({
  handleSubmit,
  changeDeliveryAddress = false,
  productType,
  invalid,
  clientAddress,
  change,
}) => {
  const { t } = useTranslation();

  const setCountry = change.bind(null, 'countryCode');

  return (
    <FormContainer>
      <NewCardPreview productType={productType} />
      <CardAddressContainer>
        <OrderTitle productType={productType} />
        {changeDeliveryAddress ? (
          // eslint-disable-next-line react/jsx-no-bind
          <InputAddressForm setCountryCode={setCountry} />
        ) : (
          <PreviewAddressForm address={clientAddress} />
        )}

        <Delimiter />
        <Field
          component={Toggle}
          label="Change delivery address"
          name="changeDeliveryAddress"
          type="checkbox"
          placeholder="Change delivery address"
        />
      </CardAddressContainer>
      <NextBtnBox>
        <DeliveryAddressNextBtn onClick={handleSubmit} isDisabled={invalid}>
          {t('Next')}
        </DeliveryAddressNextBtn>
      </NextBtnBox>
    </FormContainer>
  );
};

const thisFormSelector = formValueSelector('CardDeliveryForm');

const mapStateToProps = (state: IStore) => {
  const changeDeliveryAddress = thisFormSelector(state, 'changeDeliveryAddress');
  const initialValues = selectCardOwnerAddress(state);
  return {
    changeDeliveryAddress,
    initialValues,
  };
};

const CardDeliveryForm = reduxForm<IDeliveryAddress, IFormProps>({
  form: 'CardDeliveryForm',
})(CardDelivery);

const InitializedCardDeliveryForm = connect(mapStateToProps)(CardDeliveryForm);

export default InitializedCardDeliveryForm;
