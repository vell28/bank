import { Action } from 'redux';
import { getStateType } from 'modules/store/types';

export type ThunkAction = (dispatch: Dispatch, getState: getStateType) => void;
export type APIRequest = () => Promise<void>;
export type Dispatch = (action: Action | ThunkAction) => void;

export type fileHandeler = (data: fileData) => void;
export type fileData = string | ArrayBuffer | null;

export interface IFileReferences {
  fileReferences: string[];
}
