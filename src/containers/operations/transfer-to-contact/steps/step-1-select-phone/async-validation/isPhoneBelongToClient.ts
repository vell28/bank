import { filterContactsListRequest, IFilterContactListBody } from 'modules/api-requests/list-user-contacts';
import { propOr } from 'ramda';
import { ISuccess, IError } from 'modules/api-client/entities';
import { IFormData, ITransferStep1Props } from '..';
import { AsyncValidator, IAsyncValidationFailedObject } from './types';

const phoneField = 'phone';
const phoneDoesNotBelongMessage = "This client doesn't have AK Money account. You can not make the transfer";

const validateSuccess = (validationSuccessResponce: ISuccess<IFilterContactListBody>, phoneInputted: string) => {
  const resultHasTheUserPhone = validationSuccessResponce.data.users.includes(phoneInputted);
  if (!resultHasTheUserPhone) {
    const validationFailedObject: IAsyncValidationFailedObject = {};
    validationFailedObject[phoneField] = phoneDoesNotBelongMessage;
    throw validationFailedObject;
  } else {
    // validation passed condition
    return Promise.resolve(undefined);
  }
};

const validateFailure = (validationFailureResponce: IError) => {
  const { errors } = validationFailureResponce;
  const validationFailedObject: IAsyncValidationFailedObject = {};

  const errorMessage = errors.map((error: any) => error.message).join(' ');
  validationFailedObject[phoneField] = errorMessage;
  throw validationFailedObject;
};

export const isPhoneBelongToClient: AsyncValidator<IFormData, ITransferStep1Props> = async (values: IFormData) => {
  const phoneInputted: string = propOr('', phoneField)(values);
  const clearedInput = phoneInputted.replace(/\s|\+|\(|\)/g, '');
  const body: IFilterContactListBody = {
    users: [clearedInput],
  };
  const validationResponce = await filterContactsListRequest(body);
  const isOk = propOr(false, 'ok')(validationResponce);

  if (isOk) {
    const successResponce = validationResponce as ISuccess<IFilterContactListBody>;
    return validateSuccess(successResponce, clearedInput);
  }
  const failureResponce = validationResponce as IError;
  return validateFailure(failureResponce);
};
