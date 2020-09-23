import { NewAccountModalType } from './new-account';
import { TransferCardModalType } from './transfer-to-card';
import { TransferContactModalType } from './transfer-to-contact';
import { TransferBankModalType } from './transfer-to-bank';
import { TransferExchangeModalType } from './transfer-to-exchange';
import { CardDetailModalType } from './card-settings';
import { TopUpFromCardModalType } from './top-up-from-card';
import { TopUpTransferModalType } from './top-up-transfer';
import { TopUpRequestModalType } from './top-up-request';
import { OrderCardModalType } from './order-new-card';
import { TransferErrorModalType } from './transaction-error';
import { TopUpCasheModalType } from './top-up-cash';

export type AllMainModalContentsType =
  | NewAccountModalType
  | TransferCardModalType
  | TransferContactModalType
  | TransferBankModalType
  | CardDetailModalType
  | TopUpFromCardModalType
  | TopUpTransferModalType
  | TopUpRequestModalType
  | OrderCardModalType
  | TransferErrorModalType
  | TopUpCasheModalType
  | TransferExchangeModalType;
