export interface ILinkStateProps {
  text: string;
}

export interface ILinkDispatchProps {
  onClick: () => void;
}

export interface ILinkProps extends ILinkStateProps, ILinkDispatchProps {}
