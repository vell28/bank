import React from 'react';

import { BankingBox } from './elements';
import keyLogo from '../../../components/common/images/icon-keyhole.svg';

export const BankingPage: React.FC = () => (
  <BankingBox>
    <img src={keyLogo} alt="keyhole" />
  </BankingBox>
);
