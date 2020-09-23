import styled from 'styled-components';

import { WhiteLink } from '../../common/button/link/elements';

export const NextBtnBox = styled.div`
  text-align: center;
  margin-top: 40px;
`;

export const Title = styled.div`
  letter-spacing: normal;
  font-size: 13px;
  opacity: 0.96;
  color: ${(props) => props.theme.colors.white};
  text-align: center;

  span {
    font-weight: bold;
  }
`;

export const LoginForm = styled.form`
  margin-top: 74px;
  margin-bottom: auto;
  padding-bottom: 50px;
  width: 280px;

  ${WhiteLink} {
    margin-top: 53px;
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 1px;
  }
  text-align: center;
`;

export const Line = styled.div`
  margin-top: 74px;
`;

export const InputWrap = styled(Line)<any>`
  h2 {
    opacity: 0.5;
  }

  & > div > div > div > div {
    text-align: left;
  }
`;
