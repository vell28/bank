import React, { PureComponent } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { equals } from 'ramda';
import flatpickr from 'flatpickr';

import { isNotEqual, isNotEmpty } from 'utils/ramda';

import { AccountType, AccountTypes } from 'models/organizations/entities';
import { CURRENCIES_IN_PROJECT, CurrencySymbols, CurrencyCodeType } from 'modules/currencies';
import {
  FilterBox, FilterLine, TinyBtn, FilterItem, CalendarWrap, CalendarBtn, CalendarLine
} from './elements';

export interface IHistoryFilterProps extends WithTranslation {
  accountType?: AccountType;
  setHistoryFilter: (type: AccountType, currency: CurrencyCodeType) => void;
  activeFilterType: string;
  setDate: (date: string) => void;
  date?: string;
}

/* tslint:disable:jsx-no-lambda */
export class HistoryFilter extends PureComponent<IHistoryFilterProps> {
  private calendar: any;

  public componentDidMount() {
    const { setDate, date: defaultDate } = this.props;
    this.calendar = flatpickr('#calendar', {
      static: true,
      onChange: (date, strDate: string) => {
        if (isNotEmpty(strDate)) {
          setDate(strDate);
        }
      },
      maxDate: Date.now(),
      defaultDate: defaultDate ? new Date(defaultDate) : undefined,
      onReady: (date, strDate, fp) => {
        fp.calendarContainer.classList.add('filterCalendar');
      },
    });
  }

  public componentDidUpdate(prevProps: IHistoryFilterProps) {
    const { date } = prevProps;
    const { date: curDate } = this.props;
    if (isNotEqual(date, curDate) && !curDate) {
      this.calendar.clear();
    }
  }

  public render() {
    const { setHistoryFilter, activeFilterType, t } = this.props;
    return (
      <>
        <CalendarLine>
          <CalendarWrap id="calendar">
            <CalendarBtn>{t('choose dates')}</CalendarBtn>
          </CalendarWrap>
        </CalendarLine>
        <FilterBox>
          <FilterLine>
            <TinyBtn>{t('print')}</TinyBtn>
            <TinyBtn>{t('export')}</TinyBtn>
          </FilterLine>
          <FilterLine>
            {Object.keys(AccountTypes).map((type: string) => {
              return CURRENCIES_IN_PROJECT.map(({ code }) => {
                const key = type + code;
                return (
                  <FilterItem
                    isActive={equals(activeFilterType, key)}
                    key={key}
                    onClick={() => setHistoryFilter(type as AccountType, code)}
                  >
                    #
                    {t(type)}
                    &nbsp;
                    {CurrencySymbols[code]}
                  </FilterItem>
                );
              });
            })}
          </FilterLine>
        </FilterBox>
      </>
    );
  }
}

export default withTranslation()<IHistoryFilterProps>(HistoryFilter);

/* tslint:enable:jsx-no-lambda */
