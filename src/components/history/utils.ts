import { isToday, isYesterday, format } from 'date-fns';
import { pathOr } from 'ramda';

import { ITransactionList, ITransaction, IOrderedTransactions } from 'models/transactions/entities';

export const getDayTitle = (date: Date): string => {
  if (isToday(date)) {
    return 'today';
  }
  if (isYesterday(date)) {
    return 'yesterday';
  }
  return format(date, 'dd/MM/yyyy');
};

export const groupByAccountType = (list: ITransactionList): IOrderedTransactions => {
  const ordered: IOrderedTransactions = {};
  list.map((item: ITransaction) => {
    const type = pathOr('unknown', ['simpleAccount', 'accountType'])(item);
    if (ordered[type]) {
      ordered[type].push(item);
    } else {
      ordered[type] = [item];
    }
    return item;
  });
  return ordered;
};
