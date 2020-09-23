import styled from 'styled-components';

import Icon from './check.svg';

export const Mark = styled<any>('span')`
  display: block;
  position: relative;
  min-width: 30px;
  height: 30px;
  font-family: Font awesome\\5 Free;
  font-weight: 900;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  line-height: 19px;
  border-radius: 8px;
  ${(props) =>
    props.hasError
      ? `
      border: 1px solid ${props.theme.colors.red};
    `
      : `
      border: 1px solid transparent;
    `} background-color: rgba(255, 255, 255, 0.07);
`;

export const Box = styled<any>('div')`
  position: relative;
  margin-right: 11px;
  vertical-align: middle;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  ${(props) =>
    props.checked
    && `
    ${Mark} {
      border-color: #77a45c;
      &::after {
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        background: url(${Icon}) no-repeat center center;
      }
    }
  `};
`;

export const Content = styled<any>('div')`
  padding-left: 12px;
  width: 100%;
`;

export const CheckboxLine = styled<any>('div')`
  display: flex;
  & > * {
    flex: 0;
  }
  & > * + * {
    margin-left: 10px;
  }
`;
