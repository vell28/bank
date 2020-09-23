import { IOptions } from './request';

export interface IServerErrors {
  code?: number;
  message?: string;
  type?: string;
  properties?: IOptions;
}

export interface IError {
  ok: false;
  status: number;
  errors: IServerErrors[];
}

export interface ISuccess<T> {
  ok: true;
  status: number;
  data: T;
}

export type ResponseAPI<T> = ISuccess<T> | IError;

export interface IFetchResponse {
  readonly ok: boolean;
  readonly status: number;
  readonly statusText: string;
  readonly url: string;
  json(): Promise<any>;
}
