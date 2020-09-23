import { Dispatch } from 'react';
import { InjectedFormProps } from 'redux-form';

export type AsyncValidator<FormModel, FormOwnProps = {}, ErrorType = string> = (
  values: FormModel,
  dispatch: Dispatch<any>,
  props: FormOwnProps & InjectedFormProps<FormModel, FormOwnProps, ErrorType>,
  blurredField: string,
) => Promise<any>;

type errorMessage = string;
export interface IAsyncValidationFailedObject {
  [fieldName: string]: errorMessage;
}
