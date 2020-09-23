import React from 'react';
import { useTranslation } from 'react-i18next';

import { IAccount } from 'models/organizations/entities';
import {
  AccountDetailBox,
  BankId,
  BankDetail,
  BankDetailBox,
  FieldTitle,
  FieldValue,
  ActionBox,
  DetailActionBtn,
} from './elements';

interface IAccountDetailsProps {
  bankTitle: string;
  bankTin: string;
  account: IAccount;
  onCopy: () => void;
  onExport: () => void;
}

export const AccountDetails: React.FC<IAccountDetailsProps> = ({
  account, bankTitle, bankTin, onCopy, onExport
}) => {
  const { t } = useTranslation();

  return (
    <AccountDetailBox>
      <BankId>
        {t('IBAN:')}
        {' '}
        {account.accountName}
      </BankId>
      <BankDetail>
        <BankDetailBox>
          <FieldTitle>{t('The beneficiarys bank')}</FieldTitle>
          <FieldValue>{bankTitle}</FieldValue>
        </BankDetailBox>
        <BankDetailBox>
          <FieldTitle>{t('BIC')}</FieldTitle>
          <FieldValue>{bankTin}</FieldValue>
        </BankDetailBox>
      </BankDetail>
      <ActionBox>
        <DetailActionBtn onClick={onCopy}>{t('copy')}</DetailActionBtn>
        <DetailActionBtn onClick={onExport}>{t('export')}</DetailActionBtn>
      </ActionBox>
    </AccountDetailBox>
  );
};
