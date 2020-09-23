import { ICardUnmasked, ICard, ILimitData } from 'models/operations/card-settings/entities';
import { AccountStatusType } from 'models/organizations/entities';
import { IConfirmation } from 'models/operations/sms-confirmation/entities';
import { ResponseAPI } from '../../api-client/entities';
import { makeGetRequest, makePatchRequest } from '../../api-client/request';

import { host, apiVersion } from '../const';
import { IConfirmHeader } from '../payments/entities';

export interface ICardStatusData {
  data: {
    card: { status: AccountStatusType };
  };
}

export const fetchUnmaskedCardRequest = (cardId: string): Promise<ResponseAPI<ICardUnmasked>> =>
  makeGetRequest<ICardUnmasked>(`${host}/api/${apiVersion}/cards/${cardId}/unmask`, {});

export const setCardStatusRequest = (cardId: string, statusData: ICardStatusData): Promise<ResponseAPI<ICard>> =>
  makePatchRequest<ICard>(`${host}/api/${apiVersion}/cards/${cardId}`, statusData);

export const setUnBlockCardRequest = (
  cardId: string,
  status: AccountStatusType,
  header?: IConfirmHeader,
): Promise<ResponseAPI<IConfirmation>> =>
  makePatchRequest<IConfirmation>(`${host}/api/${apiVersion}/cards/${cardId}`, {
    data: {
      card: { status },
    },
    appendHeader: header,
  });

export const setCardLimitRequest = (
  cardId: string,
  limitData: ILimitData,
  header?: IConfirmHeader,
): Promise<ResponseAPI<ICard>> =>
  makePatchRequest<ICard>(`${host}/api/v2/cards/${cardId}`, {
    data: {
      card: { limits: [limitData] },
    },
    appendHeader: header,
  });

export const setIncreaseCardLimitRequest = (
  cardId: string,
  limitData: ILimitData,
  header?: IConfirmHeader,
): Promise<ResponseAPI<IConfirmation>> =>
  makePatchRequest<IConfirmation>(`${host}/api/v2/cards/${cardId}`, {
    data: {
      card: { limits: [limitData] },
    },
    appendHeader: header,
  });

export const setDisableCardLimitsRequest = (
  cardId: string,
  header?: IConfirmHeader,
): Promise<ResponseAPI<IConfirmation>> =>
  makePatchRequest<IConfirmation>(`${host}/api/v2/cards/${cardId}`, {
    data: {
      card: {
        options: {
          limits: {
            disable: true,
          },
        },
      },
    },
    appendHeader: header,
  });
