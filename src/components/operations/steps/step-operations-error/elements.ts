import styled from 'styled-components';

import { BigRoundBtn } from '../../../common/button/big-round/elements';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ErrorText = styled.p`
  font-family: Avenir, sans-serif;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  text-align: center;
  color: ${(props) => props.theme.colors.red};
  max-width: 72%;
  margin-top: 188px;
`;

export const Button = styled(BigRoundBtn)`
  width: 100px;
  height: 100px;
  text-transform: uppercase;
  margin-bottom: 68px;
`;
