import { print } from '../print';
import { savePdf } from '../save';

const documentTitle = 'Bank Account Details';

export const getPdfAccountDetails = (iban: string, recipientName: string, bankName: string, bankBIC: string) => {
  return `
    <div className="detais__container">
      <div className="title__container">
        <h3 style="font-size: 28px; font-weight: bold">Bank Account Details</h1>
      </div>

      <div className="iban__container">
        <div className="field-iban">${`IBAN: ${iban}`}</div>
      </div>

      <div className="fields__container">
        <div className="field field-recipient">${`Recipient: ${recipientName}`}</div>
        <div className="field field-bank">${`The beneficiary's bank: ${bankName}`}</div>
        <div className="field field-bic">${`BIC: ${bankBIC}`}</div>
      </div>
    </div>
  `;
};

export const printAccountDetails = (iban: string, recipientName: string, bankName: string, bankBIC: string) => {
  const template = getPdfAccountDetails(iban, recipientName, bankName, bankBIC);
  print(template, documentTitle);
};

export const saveAccountDetails = (iban: string, recipientName: string, bankName: string, bankBIC: string) => {
  const template = getPdfAccountDetails(iban, recipientName, bankName, bankBIC);
  savePdf(template, documentTitle);
};

export const copyToAccountDetails = (iban: string, recipientName: string, bankName: string, bankBIС: string) => {
  const el = document.createElement('textarea');
  const copyingString = `IBAN: ${iban} Recipient name:${recipientName} The beneficiary's bank: ${bankName} BIC: ${bankBIС}`;
  el.value = copyingString;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
