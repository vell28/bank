import React, { memo } from 'react';
import { connect } from 'react-redux';
import valid from 'card-validator';
import { path } from 'ramda';

import { IStore } from 'modules/store/types';
import { getTransferCardNumber } from 'models/redux-forms/transfer-to-card/selectors';
import { getTopUpCardNumber } from 'models/redux-forms/topUpCard/selectors';

interface IProps {
  transferCard: string;
  topUpCard: string;
}

const CardTypeLogo: React.FC<IProps> = ({ transferCard, topUpCard }) => {
  const value = transferCard || topUpCard;
  const cardNumber = valid.number(value);
  const type = path(['card', 'type'], cardNumber);
  let cardType = 'mastercard';

  if (type) {
    cardType = type === 'visa' ? 'visa' : 'mastercard';
  }

  // eslint-disable-next-line global-require,import/no-dynamic-require
  return <img src={require(`./img/payment-${cardType}.svg`)} alt="logo" />;
};

const mapStateToProps = (state: IStore) => ({
  transferCard: getTransferCardNumber(state),
  topUpCard: getTopUpCardNumber(state),
});

export default connect(mapStateToProps)(memo(CardTypeLogo));
