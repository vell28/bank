import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';

import * as Styled from './elements';
import { TEMPLATE, TEXT } from './const';
import { IRegistrationPhoneData } from '../../../models/pages/physical/phone-number/redux/reducers';
import crossSvg from './white.svg';
import okSvg from './ok.svg';
import logo from '../login-status/logo.svg';

interface IProps {
  data: IRegistrationPhoneData;
}

export const StatusPageComponent: React.FC<IProps> = ({ data }) => {
  const { t } = useTranslation();
  const { registrationStatus, date } = data;

  let temp = '';
  let source = '';
  let formatDate: string | string[] = '';

  switch (registrationStatus) {
    case 'REGISTERED':
      temp = TEMPLATE.REGISTERED;
      formatDate = format(date || new Date().getTime(), 'dd.MM.yyyy HH:mm');
      // TODO: NEED REFACTORING WHEN BACK ADDED "date";
      formatDate = formatDate.split(' ');
      break;
    case 'CANCELED':
      temp = TEMPLATE.CANCELED;
      source = crossSvg;
      break;
    default:
      temp = TEMPLATE.NONE;
      source = okSvg;
      break;
  }

  return (
    <Styled.Container>
      <Styled.ContentWrap template={temp}>
        {source ? <img src={source} alt="img" /> : null}
        <Styled.Logo>
          <img src={logo} alt="img" />
        </Styled.Logo>
        <Styled.H2>{t(TEXT[temp].title)}</Styled.H2>
        <Styled.TextWrap template={temp}>
          <Styled.P>
            {t(TEXT[temp].text1)}
            {!!date && ` ${formatDate[0]} at ${formatDate[1]}`}
          </Styled.P>
          {TEXT[temp].text2 && <Styled.P>{t(TEXT[temp].text2)}</Styled.P>}
        </Styled.TextWrap>
        {TEXT[temp].btn && <Styled.Support to="/support">{t(TEXT[temp].btn)}</Styled.Support>}
        <Styled.Ok to={TEXT[temp].link}>{t('ok')}</Styled.Ok>
      </Styled.ContentWrap>
    </Styled.Container>
  );
};
