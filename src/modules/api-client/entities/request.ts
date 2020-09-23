export interface IHeaders {
  Authorization?: string;
  'Content-Type'?: string;
  applicationId?: string;
  productId?: string;
  token?: string;
}

export interface IOptions {
  [key: string]: any;
}

export interface IRequestData {
  data?: IOptions;
  query?: IOptions;
  appendHeader?: IOptions;
  expires?: number;
  isFormData?: boolean;
  useCredential?: boolean;
}

export interface IRequestParams extends IRequestData {
  headers: IHeaders;
}
