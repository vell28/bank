import React, { PureComponent } from 'react';
import { equals } from 'ramda';

import { MainContainer } from './elements';

const HALF_OFFSET = 13;
const START_DELAY = 400;

interface IAppContainerProps {
  children: React.ReactNode;
}

export class AppWrapper extends PureComponent<IAppContainerProps> {
  public state: any = {
    percent: -1,
  };

  private container: any;

  private addTimeoutId: number | null = null;

  public componentDidMount() {
    this.setState({ percent: 0 });
  }

  public componentDidUpdate() {
    const { percent } = this.state;
    const newPercent = this.getPercent();
    if (!this.matchPercent(percent, newPercent) && this.container) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ percent: newPercent });
      this.addTimeoutId = setTimeout(() => {
        this.container.classList.remove('animation');
        this.container.classList.add('animation');
      }, START_DELAY);
    }
  }

  public componentWillUnmount() {
    if (this.addTimeoutId) {
      clearTimeout(this.addTimeoutId);
    }
  }

  private getPercent() {
    if (!this.container) {
      return 0;
    }
    const activeAccount = document.querySelector('.active-account');
    const linkTop = (activeAccount && activeAccount.getBoundingClientRect().top) || 0;
    const containerTop = this.container.getBoundingClientRect().top || 0;
    return ((linkTop + HALF_OFFSET - containerTop) / this.container.offsetHeight) * 100;
  }

  private matchPercent = (prev: number, next: number): boolean => {
    return equals(Math.floor(prev), Math.floor(next));
  };

  public render() {
    const { percent } = this.state;
    const { children } = this.props;
    return (
      <MainContainer ref={(div: any) => (this.container = div)} percent={percent}>
        {children}
      </MainContainer>
    );
  }
}
