import { AllMainModalContentsType } from 'containers/operations/types';

export type MainModalContentType = AllMainModalContentsType | '';

export interface IMainModalSettings {
  id: MainModalContentType;
  bindUrl: string;
  title?: string;
}

export interface IMainModal {
  isShown: boolean;
  settings: IMainModalSettings;
  step: number;
}
