import { emptyStore } from 'modules/store/emptyStore';

import { IStore } from 'modules/store/types';
import { getAppErrorsState } from '.';
import { IAppErrors } from '../../entities';

const data: IAppErrors = {
  type: '404',
  title: 'Page not found',
  subtitle: 'error: 404',
};

const store: IStore = {
  ...emptyStore,
  appErrors: data,
};

describe('app error selector tests', () => {
  test('getMainModalState should return modal state', () => {
    const errors = getAppErrorsState(store);
    expect(errors).toBe(data);
    expect(errors.type).toBe('404');
    expect(errors).toMatchSnapshot();
  });
});
