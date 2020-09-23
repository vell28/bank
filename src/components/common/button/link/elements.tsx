import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const BtnLink = styled<any>(Link)`
  display: inline-block;
  font-size: 16px;
  letter-spacing: 1.8px;
  text-align: center;
  text-decoration: none;
  color: ${(props: any) => props.theme.colors.blue};
  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
    color: ${(props: any) => props.theme.colors.blue};
  }
`;

export const WhiteLink = styled<any>(Link)`
  position: relative;
  display: inline-block;
  font-size: 16px;
  letter-spacing: 1.8px;
  text-align: center;
  color: ${(props: any) => props.theme.colors.white};
  text-decoration: underline;
  &:hover,
  &:focus,
  &:active {
    opacity: 0.8;
  }
`;

export const ResendLink = styled.div`
  margin-top: 24px;
  text-align: center;
  color: ${(props) => props.theme.colors.blue};
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    opacity: 0.8;
  }
`;
