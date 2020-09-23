import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

interface IPortalProps {
  selector?: string;
  children: React.ReactNode;
}

export class Portal extends PureComponent<IPortalProps> {
  private portalDomNode: Element = document.createElement('div');

  constructor(props: IPortalProps) {
    super(props);
    const selector = props.selector || '#popup-portal';
    const portal = document.querySelector(selector);
    this.portalDomNode = portal || this.portalDomNode;
  }

  public render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.portalDomNode);
  }
}
