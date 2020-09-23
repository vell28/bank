export enum AccountTypes {
  LINKED = 'LINKED',
  BUSINESS = 'BUSINESS',
  SAVINGS = 'SAVINGS',
}

export type AccountTypeType =
  | AccountTypes.LINKED
  | AccountTypes.BUSINESS
  | AccountTypes.SAVINGS;

export enum AccountNames {
  LINKED = 'Linked',
  BUSINESS = 'Business',
  SAVINGS = 'Savings',
}

export type AccountNameType =
  | AccountNames.LINKED
  | AccountNames.BUSINESS
  | AccountNames.SAVINGS;

export interface IAccount {
  type: AccountTypeType;
  name: AccountNameType;
}

export const ACCOUNTS: IAccount[] = [
  {
    type: AccountTypes.LINKED,
    name: AccountNames.LINKED,
  },
  {
    type: AccountTypes.BUSINESS,
    name: AccountNames.BUSINESS,
  },
  {
    type: AccountTypes.SAVINGS,
    name: AccountNames.SAVINGS,
  },
];
