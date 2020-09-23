import { registrationPhone, IRegistrationPhoneState } from '.';
import { REGISTRATION_PHONE } from '../actions';

const initRegistrationPhone: IRegistrationPhoneState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {
    registrationStatus: '',
    uuid: '',
    additionalInfoUrl: '',
    phoneNumber: '',
  },
  errors: [],
};

const registrationStatus = {
  registrationStatus: 'REGISTERED',
  uuid: '',
  additionalInfoUrl: '',
  phoneNumber: '+79111111111',
};

describe('registrationPhone reducers', () => {
  test('registration/PHONE_SUCCESS', () => {
    const action = {
      type: `${REGISTRATION_PHONE}_SUCCESS`,
      payload: registrationStatus,
    };

    const newState = registrationPhone(initRegistrationPhone, action);
    expect(newState.data).toBe(registrationStatus);
  });
});
