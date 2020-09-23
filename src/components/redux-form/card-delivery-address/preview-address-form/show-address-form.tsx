import React from 'react';
import { IAddress } from 'models/operations/order-card/entities';
import { formatAddressForHumen } from 'utils/formatAddress';
import { PreviewContainer, SentToLabel, AddressField } from './elements';

export interface IPreviewAddressFormProps {
  address: IAddress;
}

export const PreviewAddressForm: React.FC<IPreviewAddressFormProps> = ({ address }) => (
  <PreviewContainer>
    <SentToLabel>Your card will be send to:</SentToLabel>
    <AddressField>{formatAddressForHumen(address)}</AddressField>
  </PreviewContainer>
);
