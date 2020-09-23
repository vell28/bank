import React from 'react';
import { Field } from 'redux-form';
import { isRequiredCardholderName, isRequiredPhoneNumber } from 'utils/required-names';
import { CardProductType } from 'models/operations/card-settings/entities';
import { allowedSymbols, maxNameLength } from 'utils/redux-form/redux-form';
import { NewCardPreview } from '../../../common/new-card-preview';
import { FormContainer, CardOwnerDetailsContainer, Delimiter } from './elements';
import { OrderTitle } from '../../common/order-title';
import { TextInput } from '../../../common/form/text-input';
import { ICardOwnerFormProps } from '..';

export const CardOwnerForm: React.FC<ICardOwnerFormProps> = ({ productType }) => {
  const productTypeNotNull = productType as CardProductType; // We sure we set product type
  return (
    <FormContainer>
      <NewCardPreview productType={productTypeNotNull} />
      <CardOwnerDetailsContainer>
        <OrderTitle productType={productTypeNotNull} />
        <Field
          component={TextInput}
          label="family member's name"
          placeholder="Enter cardholder name"
          validate={[isRequiredCardholderName, allowedSymbols, maxNameLength]}
          name="embossedName"
          type="text"
        />
        <Delimiter />
        <Field
          component={TextInput}
          label="phone number"
          placeholder="Enter phone number"
          validate={[isRequiredPhoneNumber]}
          name="phoneNumber"
          type="text"
        />
        <Delimiter />
      </CardOwnerDetailsContainer>
    </FormContainer>
  );
};
