export type AppErrorType = '401' | '404' | '403' | '500' | 'ERR_INTERNET_DISCONNECTED';

export interface IAppErrors {
  title?: string;
  subtitle?: string;
  onOk?: () => void;
  btnText?: string;
  supportUrl?: string;
  type?: AppErrorType;
  meta?: string;
}
