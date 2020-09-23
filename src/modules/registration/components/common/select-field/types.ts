export interface ISelectOption<T> {
  value: T;
  label: string;
}

export interface ISelectFIeldProps<T> {
  options: Array<ISelectOption<T>>;
  nullable?: boolean;
  label?: string;
  placeholder?: string;
  name: string;
}
