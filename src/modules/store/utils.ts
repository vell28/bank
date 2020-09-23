import { or, and, not } from 'ramda';

import { createTransform } from 'redux-persist';
import { IBaseThunkState, IStore } from './types';

export const isStateLoading = (state: IBaseThunkState<any>): boolean => {
  const { isLoading } = state;
  const notSuccessAndError = and(not(state.isSuccess), not(state.isError));
  return or(isLoading, notSuccessAndError);
};

// @ts-ignore
export const blacklistTransform = createTransform((inboundState: IStore, key: string) => {
  if (key === 'registrationModule' && inboundState.registrationModule) {
    return {
      ...inboundState,
      registrationModule: {
        ...inboundState.registrationModule,
        firebaseAuth: {
          ...inboundState.registrationModule.firebaseAuth,
          isSuccess: false,
          isError: false,
        },
        registrationPhone: {
          ...inboundState.registrationModule.registrationPhone,
          isSuccess: false,
          isError: false,
        },
      },
    };
  }
  return inboundState;
});
