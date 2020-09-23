import { ICountry } from '@components/popup/popup-select-country/country-list';

export interface IFirebaseAuthConfig {
  codeSendDate?: number;
  attempts: number;
  phone?: string;
  country?: ICountry;
}
