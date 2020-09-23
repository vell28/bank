import { findAccountIndexById } from './utils';

import { accountsData } from '../../mock';

const organization = {
  data: [{ accounts: accountsData }],
};

const accountId = 'PPY6666';

describe('organizations reducers utils test', () => {
  test('organizations/find account index by id', () => {
    const existedIndex = findAccountIndexById(accountId)(organization);
    expect(existedIndex).toEqual(1);
    const notExistedIndex = findAccountIndexById('any')(organization);
    expect(notExistedIndex).toEqual(-1);
  });
});
