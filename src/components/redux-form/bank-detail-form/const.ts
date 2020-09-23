import { toPairs } from 'ramda';

import { SwiftCommissionTypes, SwiftUrgencyTypes } from 'models/operations/transfer/entities';

import { ISelectOption } from '../../common/form/select-input';

export const commissionOptions: ISelectOption[] = toPairs(SwiftCommissionTypes).map(([value, label]) => ({
  label,
  value,
}));

export const urgencyOptions: ISelectOption[] = toPairs(SwiftUrgencyTypes).map(([value, label]) => ({
  label,
  value,
}));
