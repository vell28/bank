import React, { useEffect } from 'react';
import { equals, propOr } from 'ramda';
import { useTranslation } from 'react-i18next';

import getDataServer from '../../../../modules/countries/country-list.json';
import { SpinnerWrapper } from '../../../spinner';

import {
  CountryList, CountryListElement, FlagIcon, RowElement, TitleName, CodeNumb, CheckedElement
} from './elements';

interface ISelectCountryProps {
  searchValue?: string;
  selectedCountry?: ICountry;
  isOpened: boolean;
  isShown: boolean;
  setIsOpened: (bool: boolean) => void;
  handleSelectCountry?: (value: ICountry) => void;
  showCode?: boolean;
}

export interface ICountry {
  name?: string;
  dialCode?: string;
  code?: string;
}

export const SelectCountryList: React.FC<ISelectCountryProps> = ({
  searchValue = '',
  selectedCountry,
  handleSelectCountry,
  isOpened,
  isShown,
  showCode = true,
  setIsOpened,
}: ISelectCountryProps) => {
  const currentData = getDataServer.filter(
    (item: any) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1,
  );

  useEffect(
    () => {
      if (!isOpened && isShown && currentData) {
        const img = new Image();
        const fileName: string = propOr<string>('', 'code')(currentData[currentData.length - 1]);

        img.src = `/img/country_flags/${fileName.toLowerCase()}.svg`;
        img.onload = () => setIsOpened(true);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isShown],
  );

  const { t } = useTranslation();

  return (
    <CountryList>
      {isOpened ? (
        currentData.map((item: ICountry) => {
          const isChecked = selectedCountry && equals(item.name, selectedCountry.name);
          const onCheck = () => handleSelectCountry && handleSelectCountry(item);
          const fileName: string = propOr<string>('', 'code')(item);
          const iconPath = `/img/country_flags/${fileName.toLowerCase()}.svg`;
          return (
            <CountryListElement key={item.name} isChecked={isChecked} onClick={onCheck}>
              <RowElement>
                <FlagIcon src={iconPath} alt={item.code} />
                <TitleName>{item.name}</TitleName>
              </RowElement>
              <RowElement>
                {showCode && <CodeNumb>{`+${item.dialCode}`}</CodeNumb>}
                <CheckedElement
                  src={isChecked ? `/img/check-green.svg` : `/img/unchecked.svg`}
                  alt={isChecked ? t('Checked') : t('Unchecked')}
                />
              </RowElement>
            </CountryListElement>
          );
        })
      ) : (
        <SpinnerWrapper isLoading={!isOpened} />
      )}
    </CountryList>
  );
};

export default SelectCountryList;
