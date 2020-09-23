import { GenderType } from '../../../../registration/entities';

export interface IBasicPersonalDataFromData {
  email: string;
  gender: GenderType | null;
  birthCountryCode: string | null;
  birthPlace: string;
  nameOnCard: string;
}
