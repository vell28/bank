import { CardProductType } from 'models/operations/card-settings/entities';

const prefix = 'AK ';

const getFormattedProductType = (productType: CardProductType) => {
  const productTypeName = productType.toLowerCase();
  return `${productTypeName.charAt(0).toUpperCase()}${productTypeName.slice(1)}`;
};

export const getCardTypeDisplayName = (productType: CardProductType) =>
  `${prefix}${getFormattedProductType(productType)}`;
