import React from 'react';

import { SpinnerBox, RelativeBox } from './elements';
import Waiting from './waiting';

// TODO: fix component, after design
interface ISpinner {
  children: React.ReactNode;
}

export const Spinner: React.FC<ISpinner> = ({ children }) => <SpinnerBox>{children}</SpinnerBox>;

interface IWithSpinner {
  isLoading: boolean;
  fill?: string;
  children?: React.ReactNode;
}

export const SpinnerWrapper: React.FC<IWithSpinner> = ({ isLoading, fill, children }) => {
  return isLoading ? (
    <Spinner>
      <Waiting fill={fill} />
    </Spinner>
  ) : (
    <>{children}</>
  );
};

export interface ILoadingProps {
  fill?: string;
}

export const Loading: React.FC<ILoadingProps> = ({ fill }) => (
  <RelativeBox>
    <Waiting fill={fill} />
  </RelativeBox>
);

export const withSpinner = (Component: React.FC<any>) => (props: any) => {
  return (
    <SpinnerWrapper isLoading>
      <Component {...props} />
    </SpinnerWrapper>
  );
};
