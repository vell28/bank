import React from 'react';

import { SignInBox, LogoBox } from './elements';
import BackBtn from '../../../../common/button/back';
import logo from './logo.svg';

interface IPageWrapperProps {
  useLogo?: boolean;
  useBackBtn?: boolean;
  handleBack: () => void;
}

export const AuthorizationPageWrapper: React.FC<IPageWrapperProps> = ({
  useLogo = true,
  useBackBtn,
  handleBack,
  children,
}) => (
  <SignInBox isStartPage={!useBackBtn}>
    {useBackBtn && <BackBtn text="back" onClick={handleBack} />}
    {useLogo && (
      <LogoBox>
        <img src={logo} alt="logo" />
      </LogoBox>
    )}
    {children}
  </SignInBox>
);
