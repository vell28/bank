import { createSelector } from 'reselect';
import { propOr } from 'ramda';

import { IStore } from 'modules/store/types';
import { IIdScanConfig, ISignificantData } from '../../entities';
import { IIdScanState, IIdScanEntryData } from '../reducers';

const revertDateString = (date: string): string =>
  date
    .split('-')
    .reverse()
    .join('.');

export const getIdScanState = (state: IStore): IIdScanState => state.registrationModule.idScan;

export const getIdScanConfig = createSelector(
  [getIdScanState],
  (state: IIdScanState): IIdScanConfig | undefined => state.config,
);

export const getPersonEntryId = createSelector(
  [getIdScanState],
  (state: IIdScanState): string | null => state.personEntryId,
);

export const getIdScanEntryData = createSelector(
  [getIdScanState],
  (state: IIdScanState): IIdScanEntryData => state.idScanEntryData,
);

export const getSignificantData = createSelector(
  [getIdScanEntryData],
  (idScanEntryData: IIdScanEntryData): ISignificantData => {
    return {
      name: propOr('', 'FirstName')(idScanEntryData),
      surname: propOr('', 'LastName')(idScanEntryData),
      birthDate: revertDateString(propOr('', 'BirthDate')(idScanEntryData)),
      gender: propOr('male', 'Sex')(idScanEntryData),
      documentNumber: propOr('', 'DocumentNumber')(idScanEntryData),
      expiryDate: revertDateString(propOr('', 'ExpiryDate')(idScanEntryData)),
    };
  },
);
