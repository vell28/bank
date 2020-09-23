export interface IIdScanConfig {
  host: string;
  login: string;
  password: string;
}

export interface IIdScanConfigResponse {
  idscan: IIdScanConfig;
}

export interface IIdScanAuthResponse {
  '.expires'?: string;
  '.issued'?: string;
  AbbeyServiceCentre?: string;
  BranchCode?: string;
  FullName?: string;
  IdleSessionTimeout?: string;
  JourneyId?: string;
  access_token?: string;
  expires_in?: number;
  'http://schemas.microsoft.com/ws/2008/06/identity/claims/role': 'User';
  'http;://schemas.xmlsoap.org/ws/2005/05/identity/claims/name': 'capturestudio';
  token_type: 'bearer';
}

export interface IIdScanAuthRequest {
  username: string;
  password: string;
  area: 'investigation';
  grant_type: 'password';
}

export interface IIdScanInvestigateResponse {
  PersonEntryId: string;
  EntryDateTime: '2019-12-18T08:57:38.4791899Z';
  RequiredAction: 'NONE';
  CurrentResult: 'Pass';
  HighLevelResult: 'Passed';
  EntryImages: [];
  IsFinished: boolean;
  RequestId: '00000000-0000-0000-0000-000000000000';
  HasError: boolean;
  ResultDetails: string[];
  EntryData: IEntryData;
}

interface IEntryData {
  UserName: 'capturestudio';
  RequiredJourneySteps: 'FRONTSIDE';
  DocumentType: 'Passport';
  CountryCode: string;
  'ExtractedFields.NationalityName': 'KYRGYZSTANI';
  'ExtractedFields.BirthDate': '1993-01-12';
  'ExtractedFields.ExpiryDate': '2025-10-29';
  'ExtractedFields.LastName': string;
  'ExtractedFields.FirstName': string;
  'ExtractedFields.DocumentNumber': string;
  'ExtractedFields.NationalityCode': string;
  'ExtractedFields.PersonalNumber': string;
  'ExtractedFields.Sex': 'MALE' | 'FEMALE';
  'ExtractedFields.MRZFull': string;
  'ExtractedFields.BirthPlace': 'KYRGYZ REPUBLIC';
  'ExtractedFields.IssueDate': '2015-10-29';
  'ExtractedFields.IssuingAuthority': 'SRS';
  'ExtractedFields.MRZLine1': string;
  'ExtractedFields.MRZLine2': string;
  ScanReason: '';
  AuthenticationLevel: 'default';
  ScanReference: '1000008339';
}

export interface ISignificantData {
  name: string;
  surname: string;
  birthDate: string;
  gender: string;
  documentNumber: string;
  expiryDate: string;
}
