import { emptyStore } from 'modules/store/emptyStore';
import { getAppData } from '.';

const store = {
  ...emptyStore,
  application: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errors: [],
  },
};

describe('application selector tests', () => {
  test('getAppData is undefined, should be empty', () => {
    const app = getAppData(store);
    expect(app.applicationId).toEqual('');

    const filledStore = {
      ...store,
      application: {
        ...store.application,
        data: {
          applicationId: 'applicationId',
          productId: 'productId',
          Authorization: 'Authorization',
        },
      },
    };

    const filedApp = getAppData(filledStore);
    expect(filedApp.applicationId).toEqual('applicationId');
  });
});
