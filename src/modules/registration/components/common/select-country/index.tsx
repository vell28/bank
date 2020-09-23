import React, { useCallback, useMemo, useState } from 'react';

import { ICountry } from '@components/popup/popup-select-country/country-list';
import { PopupSelectCountry } from '@components/popup/popup-select-country';
import countryList from '../../../../countries/country-list.json';
import { SelectyInput, ISelectyInputOption } from '../selecty-input';

interface ISelectCountryProps {
  value?: string | null;
  placeholder?: string;
  onChange: (country: ICountry) => void;
  hasError?: boolean;
}

const countryOptions: ISelectyInputOption[] = countryList.map((country) => ({
  label: country.name,
  value: country.code,
}));

const defaultCountry: ICountry = { name: 'Canada', dialCode: '1', code: 'CA' };

export const SelectCountry: React.FC<ISelectCountryProps> = ({
  value, placeholder, onChange, hasError = false
}) => {
  // eslint-disable-next-line max-len
  const selectedCountry = useMemo(() => countryList.find((country) => country.code === value) || defaultCountry, [value]);
  const displayValue = value ? selectedCountry.code : '';
  const [citizenshipModalIsVisible, setCitizenshipModalIsVisible] = useState<boolean>(false);
  const handleCitizenshipModalClose = useCallback(() => {
    setCitizenshipModalIsVisible(false);
  }, []);
  const handleCountrySelect = useCallback(
    (country: ICountry) => {
      setCitizenshipModalIsVisible(false);
      onChange(country);
    },
    [onChange],
  );
  const handleCitizenshipClick = useCallback(() => {
    setCitizenshipModalIsVisible(true);
  }, []);

  return (
    <>
      <SelectyInput
        placeholder={placeholder}
        value={displayValue}
        options={countryOptions}
        onClick={handleCitizenshipClick}
        hasError={hasError}
      />
      <PopupSelectCountry
        isShown={citizenshipModalIsVisible}
        selectedCountry={selectedCountry}
        onSelect={handleCountrySelect}
        onCancel={handleCitizenshipModalClose}
      />
    </>
  );
};
