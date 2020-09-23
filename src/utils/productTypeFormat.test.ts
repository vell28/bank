import { CardProduct } from 'models/operations/card-settings/entities';
import { getCardTypeDisplayName } from './productTypeFormat';

describe('product type format tests', () => {
  // compiler will restrict us from passing
  // invalid CardProductType
  test('format known product types', () => {
    const expectationMain = 'AK Main';
    const formattedMain = getCardTypeDisplayName(CardProduct.MAIN);
    expect(formattedMain).toEqual(expectationMain);

    const expectationAdditional = 'AK Additional';
    const formattedAdditional = getCardTypeDisplayName(CardProduct.ADDITIONAL);
    expect(formattedAdditional).toEqual(expectationAdditional);

    const expectationFamily = 'AK Family';
    const formattedFamily = getCardTypeDisplayName(CardProduct.FAMILY);
    expect(formattedFamily).toEqual(expectationFamily);

    const expectationKids = 'AK Kids';
    const formattedKids = getCardTypeDisplayName(CardProduct.KIDS);
    expect(formattedKids).toEqual(expectationKids);
  });
});
