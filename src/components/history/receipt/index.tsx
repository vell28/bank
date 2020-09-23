import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';

import { printReceipt, saveReceipt } from 'modules/pdf/templates/receipt';

import { ITransaction } from 'models/transactions/entities';
import {
  ReceiptBox,
  ReceiptTitle,
  CloseBtn,
  ActionBox,
  ActionBtn,
  ReceiptItem,
  ReceiptParagraph,
  ReceiptSubTitle,
  ReceiptRow,
} from './elements';

interface IReceiptProps {
  transaction: ITransaction;
  onClose: (id: string) => void;
}

export const ReceiptModal: React.FC<IReceiptProps> = ({ transaction, onClose }) => {
  const { t } = useTranslation();
  const onCloseClick = () => onClose(transaction.id);
  const id = `print-receipt-${transaction.id}`;
  const executeDate = format(new Date(transaction.executedAt), 'dd.MM.yyyy');
  const title = t(`Receipt № ${transaction.id} from ${executeDate}`);
  const onPrint = () => printReceipt(title, transaction, t);
  const onSavePdf = () => saveReceipt(title, transaction, t);
  return (
    <ReceiptBox>
      <ReceiptTitle>
        {t('receipt')}
        {' '}
        <CloseBtn onClick={onCloseClick}>+</CloseBtn>
      </ReceiptTitle>
      <ActionBox>
        <ActionBtn onClick={onPrint}>{t('print')}</ActionBtn>
        <ActionBtn onClick={onSavePdf}>{t('export')}</ActionBtn>
      </ActionBox>
      <div id={id}>
        <ReceiptItem>
          <ReceiptParagraph>
            №
            {transaction.id}
          </ReceiptParagraph>
          <ReceiptParagraph>{executeDate}</ReceiptParagraph>
        </ReceiptItem>
        <ReceiptItem>
          <ReceiptSubTitle>{t('Sender Information')}</ReceiptSubTitle>
          <ReceiptSubTitle>{t('Name:')}</ReceiptSubTitle>
          <ReceiptParagraph>{transaction.fromName}</ReceiptParagraph>
        </ReceiptItem>
        <ReceiptItem>
          <ReceiptSubTitle>{t('Account number:')}</ReceiptSubTitle>
          <ReceiptParagraph>{transaction.fromNumber}</ReceiptParagraph>
        </ReceiptItem>
        <ReceiptItem>
          <ReceiptSubTitle>{t('Bank:')}</ReceiptSubTitle>
          <ReceiptParagraph>{transaction.fromBank}</ReceiptParagraph>
        </ReceiptItem>

        <ReceiptItem>
          <ReceiptSubTitle>{t('Recipient Information')}</ReceiptSubTitle>
          <ReceiptSubTitle>{t('Name:')}</ReceiptSubTitle>
          <ReceiptParagraph>{transaction.toName}</ReceiptParagraph>
        </ReceiptItem>
        <ReceiptItem>
          <ReceiptSubTitle>{t('Account number:')}</ReceiptSubTitle>
          <ReceiptParagraph>{transaction.toNumber}</ReceiptParagraph>
        </ReceiptItem>
        <ReceiptItem>
          <ReceiptSubTitle>{t('Bank:')}</ReceiptSubTitle>
          <ReceiptParagraph>{transaction.toBank}</ReceiptParagraph>
        </ReceiptItem>

        <ReceiptRow>
          <ReceiptItem>
            <ReceiptSubTitle>{t('Amount:')}</ReceiptSubTitle>
            <ReceiptParagraph>{transaction.amount}</ReceiptParagraph>
          </ReceiptItem>
          <ReceiptItem>
            <ReceiptSubTitle>{t('Fee:')}</ReceiptSubTitle>
            <ReceiptParagraph>{transaction.fee}</ReceiptParagraph>
          </ReceiptItem>
        </ReceiptRow>

        <ReceiptItem>
          <ReceiptSubTitle>{t('Reference number:')}</ReceiptSubTitle>
          <ReceiptParagraph>{transaction.referenceNumber}</ReceiptParagraph>
        </ReceiptItem>
        <ReceiptItem>
          <ReceiptSubTitle>{t('Comment:')}</ReceiptSubTitle>
          <ReceiptParagraph>{transaction.description}</ReceiptParagraph>
        </ReceiptItem>
      </div>
    </ReceiptBox>
  );
};
