export interface ICardData {
  cardNumber?: string;
  beneficiaryName?: string;
  expiresDate?: string;
  isHolder?: boolean;
  cvv?: string;
  country?: string;
  city?: string;
}

export interface ITopUpRequest {
  email?: string;
  initiatorName?: string;
}

export interface ITopUp {
  card: ICardData;
  value: string;
  redirectUrl?: string;
  description?: string;
  request: ITopUpRequest;
}
