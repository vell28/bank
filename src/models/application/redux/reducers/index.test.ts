import { application, IAppState } from '.';
import { INIT_APP } from '../actions';

const initToken: IAppState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {
    applicationId: '',
    productId: '',
    Authorization: '',
  },
  errors: [],
};

const data = {
  applicationId: 'BLACK_CAT_CARD',
  productId: 'BLACK_CAT_CARD',
  Authorization: '79111111111',
};

describe('application reducers', () => {
  test('app_reducer/INIT_APP', () => {
    const action = {
      type: `${INIT_APP}_SUCCESS`,
      payload: {
        data,
      },
    };

    const newState = application(initToken, action);
    expect(newState.data && newState.data.applicationId).toBe(data.applicationId);
    expect(newState.isSuccess).toBe(true);
    expect(newState).toMatchSnapshot();
  });
});
