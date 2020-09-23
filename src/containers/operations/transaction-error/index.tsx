import React from 'react';
import { connect } from 'react-redux';

import { toggleMainModal } from 'models/main-modal/redux/actions';
import { IStore } from 'modules/store/types';
import OperationsError from '../../../components/operations/steps/step-operations-error';
import { getTransferErrorTitle } from '../../../models/main-modal';

export type TransferErrorModalType = 'main-modal/TRANSACTION_ERROR_MODAL';

export interface IProps {
  title: string;
  toggleShown: () => void;
}

const TransactionError: React.FC<IProps> = ({ title, toggleShown }) => {
  return <OperationsError title={title} onClick={toggleShown} />;
};

export const mapStateToProps = (store: IStore) => ({
  title: getTransferErrorTitle(store),
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleShown: () => dispatch(toggleMainModal),
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(TransactionError));
