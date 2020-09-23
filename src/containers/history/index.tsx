import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { isEmpty } from 'ramda';
import InfiniteScroll from 'react-infinite-scroll-component';

import {
  FiltersBox, FiltersBtn, HistoryScroll, HistoryDate
} from 'components/history/elements';

import { HistoryList } from 'components/history';
import { ReceiptModal } from 'components/history/receipt';
import { SpinnerWrapper, Loading } from '@components/spinner';

import {
  getTransactionsWithFilters,
  isShownFilter,
  getShownBtns,
  getReceiptTransaction,
  isInitialLoading,
  getListLength,
} from 'models/transactions/redux/selectors';

import { IOrderedTransactions, ITransaction, IShownBtns } from 'models/transactions/entities';
import { IStore } from 'modules/store/types';
import { getDayTitle } from 'components/history/utils';
import {
  toggleHistoryFilter,
  toggleShownBtn,
  toggleReceipt as toggleReceiptById,
  fetchNextTransactionsPage,
  switchOperation,
} from '../../models/transactions/redux/actions';
import HistoryFilter from './filter';

export const RECEIPTS_CONTAINER_ID = 'receipts-id';

interface IHistoryProps {
  transactions: IOrderedTransactions;
  toggleFilter: () => void;
  fetchNextTransactions: () => void;
  isShown: boolean;
  shownBtns: IShownBtns;
  toggleShown: (id: string) => void;
  toggleReceipt: (id: string) => void;
  receipt?: ITransaction;
  isLoading: boolean;
  length: number;
  repeatOperation: (operation: ITransaction) => any;
}

export const HistoryContainer: React.FC<IHistoryProps> = ({
  transactions,
  isShown,
  toggleFilter,
  shownBtns,
  toggleShown,
  toggleReceipt,
  receipt,
  isLoading,
  fetchNextTransactions,
  length,
  repeatOperation,
}) => {
  const { t } = useTranslation();
  return receipt ? (
    <HistoryScroll>
      <ReceiptModal transaction={receipt} onClose={toggleReceipt} />
    </HistoryScroll>
  ) : (
    <HistoryScroll id="scrollableDiv">
      <SpinnerWrapper isLoading={isLoading}>
        <InfiniteScroll
          dataLength={length}
          next={fetchNextTransactions}
          hasMore
          loader={<Loading />}
          scrollableTarget="scrollableDiv"
        >
          <FiltersBox isShown={isShown}>
            <HistoryFilter />
          </FiltersBox>
          <FiltersBtn onClick={toggleFilter}>{t('filters')}</FiltersBtn>
          <div id={RECEIPTS_CONTAINER_ID}>
            {Object.keys(transactions).map((key: string) => {
              const list = transactions[key];
              if (isEmpty(list)) {
                return null;
              }
              return (
                <Fragment key={key}>
                  <HistoryDate>
                    <span>{t(getDayTitle(new Date(list[0].executedAt)))}</span>
                  </HistoryDate>
                  <HistoryList
                    transactions={list}
                    shown={shownBtns}
                    toggleShown={toggleShown}
                    toggleReceipt={toggleReceipt}
                    switchOperation={repeatOperation}
                  />
                </Fragment>
              );
            })}
          </div>
        </InfiniteScroll>
      </SpinnerWrapper>
    </HistoryScroll>
  );
};

export const mapStateToProps = (store: IStore) => {
  return {
    transactions: getTransactionsWithFilters(store),
    isShown: isShownFilter(store),
    shownBtns: getShownBtns(store),
    receipt: getReceiptTransaction(store),
    length: getListLength(store),
    isLoading: isInitialLoading(store),
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleFilter: () => dispatch(toggleHistoryFilter),
  repeatOperation: (operation: ITransaction) => dispatch(switchOperation(operation)),
  toggleShown: (id: string) => dispatch(toggleShownBtn(id)),
  toggleReceipt: (id: string) => dispatch(toggleReceiptById(id)),
  fetchNextTransactions: () => dispatch(fetchNextTransactionsPage),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer);
