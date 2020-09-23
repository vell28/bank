import typeToReducer from 'type-to-reducer';
import { IAction } from 'modules/store/types';
import {
  IS_LOADING_ADDRESS,
  DONE_ADDRESS,
  IS_LOADING_PROOF_OF_WHELTH,
  DONE_PROOF_OF_WHELTH,
} from '../actions/isLoadingActions';
import { SET_UUID, CLEAR_UUID } from '../actions/uuidActions';

export interface IAdditionalConfirmState {
  isLoadingAddress: boolean;
  isLoadingProofOfWhelth: boolean;
  uuid: string;
}

const additionalConfirmInitialState: IAdditionalConfirmState = {
  isLoadingAddress: false,
  isLoadingProofOfWhelth: false,
  uuid: '',
};

export const additionalConfirm = typeToReducer<IAdditionalConfirmState>(
  {
    [IS_LOADING_ADDRESS]: (state: IAdditionalConfirmState): IAdditionalConfirmState => ({
      ...state,
      isLoadingAddress: true,
    }),
    [DONE_ADDRESS]: (state: IAdditionalConfirmState): IAdditionalConfirmState => ({
      ...state,
      isLoadingAddress: false,
    }),
    [IS_LOADING_PROOF_OF_WHELTH]: (state: IAdditionalConfirmState): IAdditionalConfirmState => ({
      ...state,
      isLoadingProofOfWhelth: true,
    }),
    [DONE_PROOF_OF_WHELTH]: (state: IAdditionalConfirmState): IAdditionalConfirmState => ({
      ...state,
      isLoadingProofOfWhelth: false,
    }),
    [SET_UUID]: (state: IAdditionalConfirmState, action: IAction<string>): IAdditionalConfirmState => ({
      ...state,
      uuid: action.payload,
    }),
    [CLEAR_UUID]: (state: IAdditionalConfirmState): IAdditionalConfirmState => ({
      ...state,
      uuid: '',
    }),
  },
  additionalConfirmInitialState,
);
