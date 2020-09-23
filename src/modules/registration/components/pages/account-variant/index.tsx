import React from 'react';

import { NextButton } from '../../common/next-button';
import { PageOuter, Center } from '../../page-content';
import { LogoBox, Header, Buttons } from './elements';
import logo from './logo.svg';

interface IPageProps {
  physicalNext: () => void;
  juridicalNext: () => void;
}

export const AccountVariant: React.FC<IPageProps> = ({ physicalNext, juridicalNext }) => {
  return (
    <PageOuter>
      <Center>
        <LogoBox>
          <img src={logo} alt="logo" />
        </LogoBox>
        <Header>Choose registration option</Header>
        <Buttons>
          <NextButton onClick={physicalNext}>Register a personal account</NextButton>
          <NextButton onClick={juridicalNext}>Register a business account</NextButton>
        </Buttons>
      </Center>
    </PageOuter>
  );
};
