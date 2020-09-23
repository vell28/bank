import React from 'react';

import { PageError } from '../page';

interface IState {
  hasError: boolean;
}

interface IAppProps {
  children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<IAppProps, IState> {
  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  public state = {
    hasError: false,
  };

  // public componentDidCatch(error: Error, info: React.ErrorInfo) {
  // console.log('--DidCatch--', error, info);
  // Пример "componentStack":
  //   in ComponentThatThrows (created by App)
  //   in ErrorBoundary (created by App)
  //   in div (created by App)
  //   in App
  // logComponentStackToMyService(info.componentStack);
  // }

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <PageError title="Sorry, the website is under technical works. Please try again later." supportUrl="/" />;
    }

    return children;
  }
}
