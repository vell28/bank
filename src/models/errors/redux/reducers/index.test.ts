import { appErrors, IAppErrorsState } from '.';
import { SET_APP_ERROR, IAppErrorAction } from '../actions';
import { IAppErrors } from '../../entities';

const initMainMenu: IAppErrorsState = {};

const data: IAppErrors = {
  type: '404',
  title: 'Page not found',
  subtitle: 'error: 404',
};

describe('appErrors reducers', () => {
  test('mainModal/UPDATE_MAIN_MODAL', () => {
    const action: IAppErrorAction = {
      type: SET_APP_ERROR,
      payload: data,
    };

    const newState = appErrors(initMainMenu, action);
    expect(newState).toMatchSnapshot();
  });
});
