export interface IOrderCardStateProps {
  step: number;
}

export interface IOrderCardDispatchProps {
  orderCardInit: () => void;
  orderCardCleanup: () => void;
}

export interface IOrderCardProps extends IOrderCardStateProps, IOrderCardDispatchProps {}
