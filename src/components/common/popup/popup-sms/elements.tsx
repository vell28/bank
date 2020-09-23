import styled from 'styled-components';

import { NextBtn } from '../../button/next/elements';

export const PopupTitle = styled.h2`
  color: ${(props) => props.theme.colors.black};
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 9px;
  padding-top: 50px;
`;

export const PopupDescription = styled.div`
  margin-bottom: 61px;
  font-size: 15px;
  letter-spacing: 0.5px;
  text-align: center;
`;

export const ActionBLock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 30px 0;
`;

export const UnblockBtn = styled(NextBtn)`
  color: ${(props) => props.theme.colors.blue} !important;
`;

export const ServerError = styled.div`
  color: ${(props) => props.theme.colors.red};
  font-size: 13px;
  margin-top: 8px;
`;
