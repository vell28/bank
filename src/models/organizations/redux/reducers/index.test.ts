import { organizations, IOrganizationsState } from '.';
import { FETCH_ORGANIZATIONS, IServerOrganization } from '../actions/entities';
import { accountsData, clientData } from '../../mock';

const initAccounts: IOrganizationsState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: [],
  errors: [],
};

describe('organizations reducers', () => {
  test('organizations/FETCH_ACCOUNTS', () => {
    const organization: IServerOrganization = {
      id: 0,
      accounts: accountsData,
      client: clientData,
      name: 'testOrg',
      cards: [],
      clientName: 'Duplicate?',
      tin: '',
      title: 'title',
    };

    const data: IServerOrganization[] = [organization];

    const action = {
      type: `${FETCH_ORGANIZATIONS}_SUCCESS`,
      payload: {
        data,
      },
    };

    const newState = organizations(initAccounts, action);
    expect(newState.data).toMatchSnapshot();
  });
});
