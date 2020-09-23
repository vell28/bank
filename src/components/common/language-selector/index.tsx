import React, { useState } from 'react';
import { ILanguage, LangKeysType } from 'modules/localization/entities';

import { LngSelector, ActiveLng, SelectBox } from './elements';

interface ILngSelectorProps {
  activeLng: LangKeysType;
  languages: ILanguage[];
  onLngChange: (lang: LangKeysType) => void;
}

export const LanguageSelector: React.FC<ILngSelectorProps> = ({ activeLng, languages, onLngChange }) => {
  const [isShown, setShow] = useState(false);
  return (
    <LngSelector>
      <ActiveLng onClick={() => setShow(!isShown)} isShown={isShown}>
        {activeLng}
        <i className="fas fa-chevron-down" />
      </ActiveLng>
      <SelectBox isShown={isShown}>
        {languages.map((item: ILanguage) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <span key={item.key} onClick={() => onLngChange(item.key)}>
            {item.key}
          </span>
        ))}
      </SelectBox>
    </LngSelector>
  );
};
