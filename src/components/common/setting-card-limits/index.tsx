import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import {
  propEq, pathOr, pipe, filter, toPairs, reject
} from 'ramda';

import { IStore } from 'modules/store/types';

import {
  reductionLimit,
  increaseLimit,
  toggleDisableCardLimitsModal,
  toggleDisableCardLimitsTimer,
} from 'models/operations/card-settings/redux/actions';

import {
  isInitialLoadingCard,
  getSliderActiveCardId,
  getSliderActiveCard,
  getCardLimits,
  getCardLimitsDisable,
  getIsShownDisableLimitsTimer,
} from 'models/operations/card-settings/redux/selectors';

import { BlockCardLimitsSkelet } from 'components/skeleton/collections';
import { Skeleton } from 'components/skeleton';
import {
  ICard, Limit, ILimit, LimitType, ILimitData
} from 'models/operations/card-settings/entities';
import { CurrencySymbols, CurrencyCodes } from 'modules/currencies';
import { LanguageKeys } from 'modules/localization/entities';
import { LimitsDropDown } from './limits-dropdown';
import { Timer } from './timer';
import { Switch } from '../switch';
import {
  CardLimitsBox,
  LimitsTitle,
  Line,
  AvailableLimitLabelName,
  SwitchBox,
  CardLabelName,
  LimitItem,
} from './elements';

interface ICardLimitsProps {
  reductionCardLimit: (cardId: string, limit: ILimitData) => void;
  increaseCardLimit: (cardId: string, limit: ILimitData) => void;
  showDisableModal: () => void;
  showLimitsTimer: (isShown: boolean) => void;
  fullCard?: ICard;
  cardId: string;
  isLoading: boolean;
  limits: ILimit[];
  limitsDisable: boolean;
  isShownTimer: boolean;
}

interface IDropDownShownState {
  [key: string]: boolean;
}

const SettingCardLimits: React.FC<ICardLimitsProps> = ({
  reductionCardLimit,
  increaseCardLimit,
  showDisableModal,
  fullCard,
  cardId,
  isLoading,
  limits,
  limitsDisable,
  isShownTimer,
  showLimitsTimer,
}: ICardLimitsProps) => {
  const { t } = useTranslation();
  const onSwitchCheck = () => showDisableModal();
  const onShownTimer = () => showLimitsTimer(false);
  const [dropDownShown, setDropDownShown] = useState<IDropDownShownState>({
    DAY: false,
    MONTH: false,
  });

  const currency = pathOr(CurrencyCodes.USD, ['currency', 'code'])(fullCard);
  const isEnabledLimits = !isShownTimer;

  const onShown = (key: LimitType) => {
    const nextKey = pipe<any[], any, LimitType>(
      filter((n) => n[0] !== key),
      pathOr(Limit.DAY, [0, 0]),
    )(toPairs(dropDownShown));

    if (dropDownShown[nextKey] && !dropDownShown[key]) {
      setDropDownShown({
        [key]: !dropDownShown[key],
        [nextKey]: !dropDownShown[nextKey],
      });
    } else {
      setDropDownShown({ ...dropDownShown, [key]: !dropDownShown[key] });
    }
  };

  const onReductionLimit = (limitData: ILimitData) => reductionCardLimit(cardId, limitData);
  const onIncreaseLimit = (limitData: ILimitData) => increaseCardLimit(cardId, limitData);

  const onSetLimit = (key: LimitType, value: string) => {
    const previousValue = pipe<ILimit[], ILimit[], number>(
      filter(propEq('type', key)),
      pathOr(0, [0, 'maxValue']),
    )(limits);

    const limitData = { type: key, maxValue: value };
    if (previousValue < +value) {
      onIncreaseLimit(limitData);
    } else if (previousValue === +value) {
      return;
    } else {
      onReductionLimit(limitData);
    }
    onShown(key);
  };

  const availableValue = pipe<ILimit[], ILimit[], number>(
    filter(propEq('type', Limit.FREE_ATM_WITHDRAWAL)),
    pathOr(0, [0, 'maxValue']),
  )(limits);

  return (
    <Skeleton isLoading={isLoading} render={<BlockCardLimitsSkelet />}>
      <CardLimitsBox>
        <LimitsTitle>{t('Limits')}</LimitsTitle>
        {reject(propEq('type', Limit.FREE_ATM_WITHDRAWAL))(limits).map((item: ILimit) => (
          <Line key={item.type}>
            <LimitItem>
              <ul>
                <li>
                  <CardLabelName isEnabled={isEnabledLimits}>
                    {t(propEq('type', Limit.DAY)(item) ? 'Day Limit' : 'Monthly Limit')}
                  </CardLabelName>
                  <CardLabelName isEnabled={isEnabledLimits}>
                    {CurrencySymbols[currency]}
                    {' '}
                    {item.maxValue.toLocaleString(LanguageKeys.DE)}
                  </CardLabelName>
                </li>
                <li>
                  <AvailableLimitLabelName>Available</AvailableLimitLabelName>
                  <AvailableLimitLabelName>
                    {CurrencySymbols[currency]}
                    {' '}
                    {availableValue.toLocaleString(LanguageKeys.DE)}
                  </AvailableLimitLabelName>
                </li>
              </ul>
            </LimitItem>
            <LimitsDropDown
              limit={item}
              setShown={onShown}
              setLimit={onSetLimit}
              dropDownShown={dropDownShown[item.type] && isEnabledLimits}
            />
          </Line>
        ))}

        <Line>
          <CardLabelName isEnabled={isShownTimer}>{t('Disable Limits Temporarily')}</CardLabelName>
          <Timer value={180} isStart={limitsDisable && isShownTimer} onTimerEnd={onShownTimer} />
          <SwitchBox>
            <Switch onCheck={onSwitchCheck} isChecked={isShownTimer} isDisable={isShownTimer} />
          </SwitchBox>
        </Line>
      </CardLimitsBox>
    </Skeleton>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  reductionCardLimit: (cardId: string, limit: ILimitData) => dispatch(reductionLimit(cardId, limit)),
  increaseCardLimit: (cardId: string, limit: ILimitData) => dispatch(increaseLimit(cardId, limit)),
  showDisableModal: () => dispatch(toggleDisableCardLimitsModal(true)),
  showLimitsTimer: (isShown: boolean) => dispatch(toggleDisableCardLimitsTimer(isShown)),
});

const mapStateToProps = (store: IStore) => ({
  isLoading: isInitialLoadingCard(store),
  cardId: getSliderActiveCardId(store),
  fullCard: getSliderActiveCard(store),
  limits: getCardLimits(store),
  limitsDisable: getCardLimitsDisable(store),
  isShownTimer: getIsShownDisableLimitsTimer(store),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingCardLimits);
