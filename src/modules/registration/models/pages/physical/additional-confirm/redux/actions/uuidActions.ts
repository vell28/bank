import { IAction } from 'modules/store/types';
import { Action } from 'redux';

export const SET_UUID = 'registration/SET_UUID';
export const CLEAR_UUID = 'registration/CLEAR_UUID';

export const setUUID = (uuid: string): IAction<string> => ({
  type: SET_UUID,
  payload: uuid,
});

export const clearUUID = (): Action => ({
  type: CLEAR_UUID,
});
