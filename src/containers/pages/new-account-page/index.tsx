import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';

import { CloseBtn } from '../../../components/common/button/close';
import { MainModalBox, MainModalCloseBox } from '../../main-central-modal/elements';
import NewAccount from '../../operations/new-account';

interface IPageProps {
  handleClose: () => void;
}

const NewAccountPage: React.FC<IPageProps> = ({
  handleClose,
}) => (
  <MainModalBox isShown>
    <MainModalCloseBox>
      <CloseBtn onClick={handleClose} />
    </MainModalCloseBox>
    <NewAccount />
  </MainModalBox>
);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleClose: () => dispatch(goBack()),
});

export default connect(
  null,
  mapDispatchToProps,
)(NewAccountPage);
