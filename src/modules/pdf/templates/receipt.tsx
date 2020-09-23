import { format } from 'date-fns';
import { TFunction } from 'i18next';
import { ITransaction } from 'models/transactions/entities';
import { print } from '../print';
import { savePdf } from '../save';

const getPdfReceipt = (transaction: ITransaction, t: TFunction): string => {
  return `
    <div>
        <h1 style="font-size: 28px; font-weight: bold">AK Money Receipt</h1>
        <div style="font-size: 20px; font-weight: bold">${transaction.id}</div>
        <div style="font-size: 20px; font-weight: bold">${format(new Date(transaction.executedAt), 'dd.MM.yyyy')}</div>

        <h2 style="font-size: 20px; font-weight: bold; text-transform: uppercase; color: #a5adb8; margin-bottom: 5px !important;">${t(
    'sender information',
  )}</h2>
        <div style="display: flex; justify-content: space-between; font-size: 16px; margin-bottom: 5px">
            <div>${t('Name')}</div>
            <div style="font-weight: bold">${transaction.fromName}</div>
        </div>
         <div style="display: flex; justify-content: space-between; font-size: 16px; margin-bottom: 5px">
            <div>${t('Account number')}</div>
            <div style="font-weight: bold">${transaction.fromNumber}</div>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 16px; margin-bottom: 5px">
            <div>${t('Bank')}</div>
            <div style="font-weight: bold">${transaction.fromBank}</div>
        </div>

        <h2 style="font-size: 20px; font-weight: bold; text-transform: uppercase; color: #a5adb8; margin-bottom: 5px !important;">${t(
    ' beneficiary information',
  )}</h2>
        <div style="display: flex; justify-content: space-between; font-size: 16px; margin-bottom: 5px">
            <div>${t('Name')}</div>
            <div style="font-weight: bold">${transaction.toName}</div>
        </div>
         <div style="display: flex; justify-content: space-between; font-size: 16px; margin-bottom: 5px">
            <div>${t('Account number')}</div>
            <div style="font-weight: bold">${transaction.toNumber}</div>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 16px; margin-bottom: 5px">
            <div>${t('Bank')}</div>
            <div style="font-weight: bold">${transaction.toBank}</div>
        </div>

         <h2 style="font-size: 20px; font-weight: bold; text-transform: uppercase; color: #a5adb8; margin-bottom: 5px !important;">${t(
    'payment information',
  )}</h2>
        <div style="display: flex; justify-content: space-between; font-size: 16px; margin-bottom: 5px">
            <div>${t('Type')}</div>
            <div style="font-weight: bold">${transaction.paymentType}</div>
        </div>
         <div style="display: flex; justify-content: space-between; font-size: 16px; margin-bottom: 5px">
            <div>${t('Amount')}</div>
            <div style="font-weight: bold">${transaction.amount}</div>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 16px; margin-bottom: 5px">
            <div>${t('Fee')}</div>
            <div style="font-weight: bold">${transaction.fee}</div>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 16px; margin-bottom: 5px">
            <div>${t('Referencenumber')}</div>
            <div style="font-weight: bold">${transaction.referenceNumber}</div>
        </div>
                 <h2 style="font-size: 20px; font-weight: bold; text-transform: uppercase; color: #a5adb8; margin-bottom: 5px !important;">${t(
    'comment',
  )}</h2>
        <div style="display: flex; justify-content: space-between; font-size: 16px; margin-bottom: 5px">
            <div>${t('Type')}</div>
            <div style="font-weight: bold">${transaction.description}</div>
        </div>
    </div>
  `;
};

export const printReceipt = (name: string, transaction: ITransaction, t: TFunction) => {
  const template = getPdfReceipt(transaction, t);
  print(template, name);
};

export const saveReceipt = (name: string, transaction: ITransaction, t: TFunction) => {
  const template = getPdfReceipt(transaction, t);
  savePdf(template, name);
};
