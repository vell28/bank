import { IStore } from './types';
import { emptyStore } from './emptyStore';

export const migrations: any = {
  3: (store: IStore): IStore => ({
    ...store,
    mainModal: {
      settings: {
        id: '',
        bindUrl: '',
      },
      step: 0,
      isShown: false,
    },
  }),
  8: (): IStore => ({
    ...emptyStore,
  }),
};
