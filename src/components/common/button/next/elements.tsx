import styled from 'styled-components';

import { circleBtnCss } from '../elements';

export const NextBtn = styled<any>('button')`
  ${circleBtnCss};
  outline: none;
  font-size: 17px;
  letter-spacing: 1.28px;
  position: relative;
  width: 100px;
  color: ${({ theme }) => theme.colors.red} !important;
  height: 100px;
  pointer-events: ${(props) => (props.isLoading ? 'none' : 'auto')};
  border-color: ${({ theme }) => theme.colors.gray} !important;
  background: transparent !important;
  ${(props) =>
    props.isDisabled
    && ` color: ${props.theme.colors.gray} !important;
      border-color: ${props.theme.colors.gray} !important;
    `};
  &:hover,
  &:active {
    color: ${(props) => props.theme.colors.blue} !important;
    border-color: ${({ theme }) => theme.colors.blue} !important;
  }
`;
