import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Dispatch } from 'redux';
import { isEmpty } from 'ramda';

import { IAppErrors } from 'models/errors/entities';

import { IStore } from 'modules/store/types';
import { PageError } from 'components/errors/page';
import { getAppErrorsState } from 'models/errors/redux/selectors';
import { BANKING_PATH } from '../../routing/utils';

interface IAppErrorsProps {
  errors: IAppErrors;
  backToHome: () => void;
}

export const AppErrorsContainer: React.FC<IAppErrorsProps> = ({ errors, backToHome }) => {
  if (isEmpty(errors)) {
    backToHome();
  }
  return <PageError {...errors} onOk={backToHome} />;
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  backToHome: () => dispatch(push(BANKING_PATH)),
});

export const mapStateToProps = (store: IStore) => {
  return {
    errors: getAppErrorsState(store),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppErrorsContainer);
