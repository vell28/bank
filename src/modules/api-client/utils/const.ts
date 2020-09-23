import { IError } from '../entities';

export const appErrorStatuses = {
  INTERNET: {
    code: -1,
    status: 'INTERNET_CONNECTION_ERROR',
  },
  SERVER_SUCCESS_ERROR: {
    code: 2000,
    status: 'SERVER_SUCCESS_ERROR',
  },
  UNKNOWN: {
    code: 0,
    status: 'UNKNOWN_API_FETCH_ERROR',
  },
  SERVER_INTERNAL: {
    code: 500,
    status: 'SERVER_INTERNAL_ERROR',
  },
};

export const INTERNET_CONNECTION_ERROR: IError = {
  ok: false,
  status: appErrorStatuses.INTERNET.code,
  errors: [
    {
      code: appErrorStatuses.INTERNET.code,
      type: 'Internet',
      message: 'Network Error. Please check your network connection and try again.',
    },
  ],
};

export const METHODS = {
  POST: 'POST',
  GET: 'GET',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export const EXPIRES_UAS_SECOND_INTERVAL = 30 * 24 * 3600;
export const EXPIRES_FIREBASE_SECOND_INTERVAL = 3600;

export const NEED_TO_CONFIRM_CODE = 449;
