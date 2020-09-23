import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { pipe } from 'ramda';

import { initApp } from 'models/application/redux/actions';
import {
  AppBox, HeaderBox, PageBox, MainBox
} from './elements';
import AppHeaderContainer from './app-header';
import Routing from '../routing';
import LeftSidebar from './sidebar-left';
import { RightSidebar } from './sidebar-right';
import MainCentralModal from '../main-central-modal';

interface IAppProps {
  init: () => void;
}

const App: React.FC<IAppProps> = ({ init }) => {
  useEffect(() => {
    init();
  }, [init]);
  return (
    <>
      <HeaderBox>
        <AppHeaderContainer />
      </HeaderBox>
      <AppBox>
        <PageBox>
          <LeftSidebar />
          <MainBox>
            <MainCentralModal />
            <Routing />
          </MainBox>
          <RightSidebar />
        </PageBox>
      </AppBox>
    </>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  init: () => dispatch(initApp),
});

export default pipe(connect(null, mapDispatchToProps))(App);
