import React from 'react';
import { useTranslation } from 'react-i18next';

import { CardProductType, CardProduct } from 'models/operations/card-settings/entities';
import { TypeRadiogroupContainer, FormContainer, ListTitle } from './elements';
import { NewCardPreview } from '../../../common/new-card-preview';
import { ProductTypeRadioField } from '../card-product-type-field';

export interface ISelectProductTypeFormProps {
  productType?: CardProductType;
  accountHasMainCard: boolean;
}

export const SelectProductTypeForm: React.FC<ISelectProductTypeFormProps> = ({ productType, accountHasMainCard }) => {
  const { t } = useTranslation();
  const mainLabel = accountHasMainCard ? 'You already have MAIN card' : undefined;
  return (
    <FormContainer>
      <NewCardPreview productType={productType} />
      <TypeRadiogroupContainer>
        <ListTitle>{t('Order new Card')}</ListTitle>
        <ProductTypeRadioField
          value={CardProduct.MAIN}
          disabled={accountHasMainCard}
          label={mainLabel}
          isCustom
        />
        <ProductTypeRadioField value={CardProduct.ADDITIONAL} isCustom />
        <ProductTypeRadioField value={CardProduct.FAMILY} isCustom />
        <ProductTypeRadioField value={CardProduct.KIDS} isCustom />
      </TypeRadiogroupContainer>
    </FormContainer>
  );
};
