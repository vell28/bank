import styled from 'styled-components';

import { ActiveSelect } from '../../common/select/elements';
import { WhiteLink } from '../../common/button/link/elements';

export const CountrySelection = styled.div`
  width: 248px;
  ${ActiveSelect} {
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: transparent;
    background-color: #19334e;
  }

  &>div: nth-child(2) {
    text-transform: lowercase;
    text-align: center;
  }
`;

export const LanguageLabel = styled.div`
  margin-bottom: 15px;
  font-size: 16px;
  letter-spacing: 0.89px;
  text-align: center;
  margin-top: 79px;
`;

export const SignInButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin-top: 63px;
  & > * + * {
    margin-top: 24px;
  }

  & > a {
    text-transform: capitalize;
    font-size: 15px;
    font-weight: 600;

    &:first-child {
      border-color: ${({ theme }) => theme.colors.green1};
      color: ${({ theme }) => theme.colors.green1};
    }
  }
`;

export const SupportLink = styled(WhiteLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 30px;
  margin-top: 40px;
  font-size: 13px;
  text-decoration: none;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.15);
  text-transform: capitalize;
`;
