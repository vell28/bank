import React, { useState } from 'react';

import { languagesMap } from 'modules/localization';
import { ILanguage, LangKeysType } from 'modules/localization/entities';
import {
  SelectBox, ActiveSelect, Dropdown, DropdownItem, Icon
} from './elements';

interface ISelectProps {
  options: ILanguage[];
  activeKey: LangKeysType;
  onChange: (key: LangKeysType) => void;
}

/* tslint:disable:jsx-no-lambda */
export const Select: React.FC<ISelectProps> = ({ options, onChange, activeKey }) => {
  const [isShown, setShown] = useState(false);
  const toggle = () => setShown(!isShown);
  return (
    <SelectBox>
      <ActiveSelect onClick={toggle}>
        <div>{languagesMap[activeKey]}</div>
        <Icon isShown={isShown} />
      </ActiveSelect>
      <Dropdown isShown={isShown}>
        {options.map((item: ILanguage) => (
          <DropdownItem key={item.key} onClick={() => onChange(item.key)}>
            {item.nativeName}
          </DropdownItem>
        ))}
      </Dropdown>
    </SelectBox>
  );
};
/* tslint:enable:jsx-no-lambda */
