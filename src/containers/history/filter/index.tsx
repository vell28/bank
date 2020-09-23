import React from 'react';
import { connect } from 'react-redux';

import { isShownFilter, getFilterDate, getActiveFilter } from 'models/transactions/redux/selectors';

import { IStore } from 'modules/store/types';
import { AccountType } from 'models/organizations/entities';
import { CurrencyCodeType } from 'modules/currencies';
import {
  toggleHistoryFilterByType as setFilter,
  toggleHistoryFilterByDate,
} from '../../../models/transactions/redux/actions';

import HistoryFilter from '../../../components/history/filters';

interface IHistoryProps {
  setHistoryFilter: (type: AccountType, currency: CurrencyCodeType) => void;
  activeFilterType: string;
  setDate: (date: string) => void;
  date?: string;
}

export const HistoryContainer: React.FC<IHistoryProps> = ({
  setHistoryFilter, activeFilterType, setDate, date
}) => (
  <HistoryFilter
    setHistoryFilter={setHistoryFilter}
    activeFilterType={activeFilterType}
    setDate={setDate}
    date={date}
  />
);

export const mapStateToProps = (store: IStore) => {
  return {
    isShown: isShownFilter(store),
    activeFilterType: getActiveFilter(store),
    date: getFilterDate(store),
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  setHistoryFilter: (type: AccountType, currency: CurrencyCodeType) => dispatch(setFilter(type, currency)),
  setDate: (date: string) => dispatch(toggleHistoryFilterByDate(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer);
