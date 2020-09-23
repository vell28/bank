export interface IApplication {
  applicationId: string;
  productId: string;
  Authorization: string;
  deviceId?: string;

  readonly bankName: string;
  readonly BIC: string;
}
