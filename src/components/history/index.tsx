import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import { CurrencySymbols } from 'modules/currencies';
import { ITransactionList, ITransaction } from 'models/transactions/entities';
import { groupByAccountType } from './utils';

import {
  HistoryItem, HistoryItemTitle, ActionBtn, Line, FlexLi
} from './elements';

interface IShownBtnState {
  [key: string]: boolean;
}

interface IHistoryProps {
  transactions: ITransactionList;
  toggleShown: (id: string) => void;
  toggleReceipt: (id: string) => void;
  shown: IShownBtnState;
  switchOperation: (operation: ITransaction) => any;
}

// TODO: refactor type to https://ronteltd.atlassian.net/wiki/spaces/CB/pages/1242923040/GET+v2+transactions
const getType = (item: ITransaction): string => {
  let result = '';
  if (item.openapiData) {
    const { type, subType } = item.openapiData;
    if (type && !item.paymentType) {
      result += type;
    }
    if (subType) {
      result += ` ${subType}`;
    }
  }
  return `${result} ${item.paymentType}`;
};

export const HistoryList: React.FC<IHistoryProps> = ({
  transactions,
  shown,
  toggleShown,
  toggleReceipt,
  switchOperation,
}) => {
  const grouped = groupByAccountType(transactions);
  const { t } = useTranslation();
  return (
    <>
      {Object.keys(grouped).map((key: string, index) => {
        const list = grouped[key];
        const keyName = `${index}${key}`;
        return (
          <HistoryItem key={keyName}>
            <HistoryItemTitle>{t(key)}</HistoryItemTitle>
            <ul>
              {list.map((item: ITransaction) => (
                <Fragment key={item.id}>
                  <Line onClick={() => toggleShown(item.id)}>
                    <span>{t(getType(item))}</span>
                    <span>
                      {CurrencySymbols[item.currency.code]}
                      {' '}
                      {item.amount}
                    </span>
                  </Line>
                  {shown[item.id] && (
                    <FlexLi>
                      {item.paymentToRepeat && (
                        <ActionBtn onClick={() => switchOperation(item)}>{t('repeat')}</ActionBtn>
                      )}
                      <ActionBtn onClick={() => toggleReceipt(item.id)}>{t('receipt')}</ActionBtn>
                    </FlexLi>
                  )}
                </Fragment>
              ))}
            </ul>
          </HistoryItem>
        );
      })}
    </>
  );
};
