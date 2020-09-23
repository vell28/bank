interface ITitle<TValue> {
  [id: string]: TValue;
}

export const ERROR_MODAL_TITLE: ITitle<string> = {
  TRANSFER_CARD_MODAL: 'Transfer / Card',
  TRANSFER_CONTACT_MODAL: 'Transfer / Contact',
  TRANSFER_BANK_MODAL: 'Transfer / Bank',
  TOP_UP_FROM_CARD_MODAL: 'Top Up / Card',
};
