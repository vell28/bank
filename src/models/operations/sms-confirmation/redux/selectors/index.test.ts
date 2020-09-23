import { emptyStore } from 'modules/store/emptyStore';
import { IStore } from 'modules/store/types';
import { getConfirmationCodeLength, getConfirmationToken, getConfirmationFailedAttempts } from '.';

const store: IStore = {
  ...emptyStore,
  operations: {
    ...emptyStore.operations,
    smsConfirmation: {
      isLoading: false,
      isSuccess: false,
      isError: false,
      data: {
        confirmationCodeLength: 5,
        confirmationToken: 'token',
        attempts: 0,
      },
      errors: [],
    },
  },
};

describe('sms confirmation selector tests', () => {
  test('getConfirmFromResponseToken should return confirm authorization or ""', () => {
    const token = getConfirmationToken(store);
    expect(token).toEqual('token');

    const emptyTokenStore = JSON.parse(JSON.stringify(store));
    emptyTokenStore.operations.smsConfirmation.data = {};

    const emptyToken = getConfirmationToken(emptyTokenStore);
    expect(emptyToken).toEqual('');
  });

  test('getConfirmCodeLength should return confirm code length or 4', () => {
    const length = getConfirmationCodeLength(store);
    expect(length).toEqual(5);

    const emptyTokenStore = JSON.parse(JSON.stringify(store));
    emptyTokenStore.operations.smsConfirmation.data = {};

    const defaultLength = getConfirmationCodeLength(emptyTokenStore);
    expect(defaultLength).toEqual(4);
  });

  test('getConfirmationFailedAttempts should return failed attempts', () => {
    const attempts = getConfirmationFailedAttempts(store);
    expect(attempts).toEqual(0);
  });
});
