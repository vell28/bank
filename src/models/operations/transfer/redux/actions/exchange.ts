import { Dispatch } from 'redux';
import { getCurrentAccountId } from 'models/organizations/redux/selectors';
import { IPaymentToContactData, IPaymentContact } from 'modules/api-requests/payments/entities';
import { IRepeatPayment } from 'models/transactions/entities';
import { getStateType, IAction, IAsyncAction } from 'modules/store/types';
import { fetchExchangeRatesRequest } from 'modules/api-requests/exchange-rates';
import { showTransactionErrorModal } from 'models/main-modal/redux/actions';

export type ISetPhoneAction = IAction<string>;

export const SET_EXCHANGE_RATES = 'transfer/SET_EXCHANGE_RATES';

export const setExchangeRates = (rates: any) => ({
  type: SET_EXCHANGE_RATES,
  payload: rates
});

export const getExchangeRates = (dispatch: Dispatch, getState: getStateType) => 
  dispatch({
    type: SET_EXCHANGE_RATES,
    payload: async () => {
      const accountId = getCurrentAccountId(getState());

      try {
        const result = await fetchExchangeRatesRequest(accountId);

        if (result.ok && !result.data.rates[0] ) {
          throw new Error();
        }

        return result;
      } catch(e) {
        dispatch<any>(showTransactionErrorModal());
      }
    }
  })