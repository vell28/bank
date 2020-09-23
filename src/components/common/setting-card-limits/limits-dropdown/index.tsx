import React, { useState, useEffect } from 'react';
import { propEq } from 'ramda';

import { ILimit, LimitType } from 'models/operations/card-settings/entities';
import { validateCustomLimit } from 'utils/card';
import { LanguageKeys } from 'modules/localization/entities';
import { DropDown } from '../dropdown';
import {
  SetLimit, DropDownListLabel, DropDownListBox, DropDownInput, Accept
} from './elements';

interface ILimitsDropDownProps {
  limit: ILimit;
  dropDownShown: boolean;
  setShown: (key: LimitType) => void;
  setLimit: (key: LimitType, maxValue: string) => void;
}

export const LimitsDropDown: React.FC<ILimitsDropDownProps> = ({
  limit, dropDownShown, setShown, setLimit
}) => {
  const [customShown, setCustomShown] = useState(false);
  const [customLimit, setCustomLimit] = useState('');
  const textInput: any = React.createRef();
  const onCustomShown = () => setCustomShown(!customShown);
  const onSetShown = () => setShown(limit.type);
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCustomLimit(validateCustomLimit(event.target.value));
  const onSetLimit = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLimit(limit.type, event.target.value.toString());

  let onSetCustomLimit = () => setLimit(limit.type, customLimit);
  if (!+customLimit) {
    onSetCustomLimit = () => null;
  }

  useEffect(() => {
    if (customShown) {
      textInput.current.focus();
    }
  }, [customShown, textInput]);

  return (
    <DropDown
      isShown={dropDownShown}
      render={(
        <DropDownListBox>
          <ul>
            {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
            {limit.preferredMaxValues!.map((item: number) => (
              <DropDownListLabel
                isSelected={propEq('maxValue', item)(limit)}
                key={item}
                onClick={onSetLimit}
                isShown
                value={item}
              >
                {item.toLocaleString(LanguageKeys.DE)}
              </DropDownListLabel>
            ))}

            <DropDownListLabel isShown={!customShown} onClick={onCustomShown}>
              Custom
            </DropDownListLabel>
            <DropDownInput onChange={onChangeInput} isShown={customShown} ref={textInput} value={customLimit} />

            <Accept isShown={customShown} isEnable={+customLimit} onClick={onSetCustomLimit}>
              ok
            </Accept>
          </ul>
        </DropDownListBox>
)}
      borderRadius={10}
    >
      <SetLimit isShown={dropDownShown} onClick={onSetShown}>
        <i className="fas fa-chevron-down" />
      </SetLimit>
    </DropDown>
  );
};
