export interface IAuthorization {
  service_code?: string;
  phone?: string;
  token?: string;
  sessid?: string;
  token_expires?: Date;
  // maybe its not required
  'dev-id'?: string;
  'token-firebase'?: string;
  isShownLogoutConfirmModal: boolean;
}

export interface ITokenRefresh {
  success: boolean;
  token: string;
}

export interface ISuccessLogout {
  success: boolean;
}

export interface ICodeRequest {
  sessid: string;
  code: string | null;
  success?: boolean;
}

export interface IPasswordCheckRequest {
  password: string;
  phone: string;
}

export interface ISuccessCheckResponse {
  status: 'ok';
}
