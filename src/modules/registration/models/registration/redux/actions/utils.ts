import { parse, addYears, format } from 'date-fns';
import { IIdentityFormData } from '../../../pages/physical/identity/entities';

const NO_EXPIRE_DATE_YEAR = 100;

export const updateIdentityExpiryDate = (data: IIdentityFormData) => {
  const { isNoExpired, issueDate } = data;
  const formatTemplate = 'dd.MM.yyyy';

  if (isNoExpired && data && issueDate) {
    let date: any = parse(issueDate, formatTemplate, new Date());
    date = addYears(date, NO_EXPIRE_DATE_YEAR);

    // eslint-disable-next-line no-param-reassign
    data.expiryDate = format(date, formatTemplate);
  }

  return data;
};
