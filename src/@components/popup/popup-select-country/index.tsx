import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { SelectCountryList, ICountry } from './country-list';
import { Portal } from '../../portal';
import { PopupDialog } from '../popup-overlay';
import * as Styled from './elements';

import search from './search.svg';

interface IPopupProps {
  onCancel?: () => any;
  isShown?: boolean;
  selectedCountry?: ICountry;
  onSelect: (country: ICountry) => void;
  showCode?: boolean;
}

export const PopupSelectCountry: React.FC<IPopupProps> = ({
  selectedCountry,
  isShown = false,
  onCancel = () => null,
  showCode = true,
  onSelect,
}) => {
  const { t } = useTranslation();
  const [value, setSearchValue] = useState<string>('');
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const clearSearch = () => value && setSearchValue('');

  const handleSelect = (country: ICountry) => {
    onSelect(country);
    clearSearch();
  };

  const handleCancel = () => {
    onCancel();
    clearSearch();
  };

  const ref = useRef<HTMLInputElement>();

  useEffect(() => {
    if (ref && ref.current && isShown) {
      ref.current.focus();
    }
  }, [isShown]);

  return (
    <Portal>
      <PopupDialog isShown={isShown} onCancel={onCancel} className="country" minHeight="350">
        <Styled.PopupTitle>{t('Select country')}</Styled.PopupTitle>
        <Styled.SearchWrap>
          <Styled.SearchField ref={ref} placeholder={t('Search')} onChange={handleInputChange} value={value} />
          <Styled.SearchIcon src={search} alt="search" />
        </Styled.SearchWrap>
        <Styled.PopupDescription>
          <SelectCountryList
            searchValue={value}
            handleSelectCountry={handleSelect}
            selectedCountry={selectedCountry}
            isOpened={isOpened}
            isShown={isShown}
            setIsOpened={setIsOpened}
            showCode={showCode}
          />
        </Styled.PopupDescription>
        <Styled.PopupBtnWrap>
          <Styled.PopupBtn onClick={handleCancel}>{t('Cancel')}</Styled.PopupBtn>
        </Styled.PopupBtnWrap>
      </PopupDialog>
    </Portal>
  );
};
