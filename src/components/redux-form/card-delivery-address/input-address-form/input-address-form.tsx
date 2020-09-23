import React, { useState } from 'react';
import { Field } from 'redux-form';
import { useTranslation } from 'react-i18next';
import { PopupSelectCountry } from '@components/popup/popup-select-country';
import { ICountry } from '@components/popup/popup-select-country/country-list';
import { formatCountryCode } from 'utils/formatAddress';
import {
  isRequiredPostalCode,
  isRequiredCity,
  isRequiredStreet,
  isRequiredStreetNumber,
  isRequiredApartmentNumber,
} from 'utils/required-names';
import { CountrySelect } from '../../fields/country-select';
import {
  SelectLine, CountryBox, Delimiter, CountryLabel
} from './elements';
import { TextInput } from '../../../common/form/text-input';

interface IInputAddressProps {
  setCountryCode: any;
}

export const InputAddressForm: React.FC<IInputAddressProps> = ({ setCountryCode }) => {
  const { t } = useTranslation();
  const [isShown, setShown] = useState<boolean>(false);
  const [country, setCountry] = useState<ICountry>({});
  const toggle = () => setShown(!isShown);
  const countryCodeLabel = t('Country code');
  const postalCodeLabel = t('Postal code');
  const provinceCodeLabel = t('Province');
  const cityLabel = t('City');
  const streetLabel = t('street');
  const streetNumberLabel = t('Street number');
  const apartmentNumberLabel = t('Apartment number');

  const onSetCountry = (newCountry: ICountry) => {
    setCountry(newCountry);
    toggle();
    setCountryCode(newCountry.code);
  };

  return (
    <>
      <CountryLabel>{countryCodeLabel}</CountryLabel>
      <SelectLine onClick={toggle}>
        <CountrySelect title="Country" name="countryCode" type="text" format={formatCountryCode} />
      </SelectLine>
      <Delimiter />
      <Field
        component={TextInput}
        label={postalCodeLabel}
        placeholder=""
        validate={[isRequiredPostalCode]}
        name="postalCode"
        type="text"
      />
      <Delimiter />
      <Field component={TextInput} label={provinceCodeLabel} placeholder="" validate={[]} name="province" type="text" />
      <Delimiter />
      <Field
        component={TextInput}
        label={cityLabel}
        placeholder=""
        validate={[isRequiredCity]}
        name="city"
        type="text"
      />
      <Delimiter />
      <Field
        component={TextInput}
        label={streetLabel}
        placeholder=""
        validate={[isRequiredStreet]}
        name="street"
        type="text"
      />
      <Delimiter />
      <Field
        component={TextInput}
        label={streetNumberLabel}
        placeholder=""
        validate={[isRequiredStreetNumber]}
        name="streetNumber"
        type="text"
      />
      <Delimiter />
      <Field
        component={TextInput}
        label={apartmentNumberLabel}
        placeholder=""
        validate={[isRequiredApartmentNumber]}
        name="apartmentNumber"
        type="text"
      />
      <Delimiter />
      <CountryBox>
        <PopupSelectCountry isShown={isShown} onCancel={toggle} selectedCountry={country} onSelect={onSetCountry} />
      </CountryBox>
    </>
  );
};
