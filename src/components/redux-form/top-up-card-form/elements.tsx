import styled from 'styled-components';

import { NextBtn } from '../../common/button/next/elements';

export const NextBtnBox = styled.div`
  text-align: center;
  margin-bottom: 13px;
  margin-top: 37px;
`;

export const SwitchBox = styled.div`
  margin: 36px 0;
`;

export const TopUpNextBtn = styled(NextBtn)`
  color: ${(props) => props.theme.colors.blue};
  border: 1px solid ${(props) => props.theme.colors.gray3};
  background-color: ${(props) => props.theme.colors.white};
  width: 100px;
  height: 100px;
  &:hover {
    background: none;
    color: ${(props) => props.theme.colors.blue};
  }
`;
