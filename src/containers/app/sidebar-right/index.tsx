import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { SidebarDropDown } from 'components/dropdown';
import { SidebarDropBtn } from 'components/common/button/dropdown';
import HistoryContainer from '../../history';

import { RightSidebar as SidebarBox } from './elements';

// TODO: its for example, remove it!
/* tslint:disable:jsx-no-lambda */
export const RightSidebar: React.FC = () => {
  const [isHistoryActive, setHistory] = useState(false);
  const { t } = useTranslation();
  return (
    <SidebarBox>
      <SidebarDropDown isShown={isHistoryActive} render={<HistoryContainer />}>
        <SidebarDropBtn onClick={() => setHistory(!isHistoryActive)} isActive={isHistoryActive}>
          {t('history')}
        </SidebarDropBtn>
      </SidebarDropDown>
    </SidebarBox>
  );
};
/* tslint:enable:jsx-no-lambda */
