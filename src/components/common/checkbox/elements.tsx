import styled from 'styled-components';

import checkIco from './check.svg';

const BASE_ICO_SIZE = 28;

export const CheckMark = styled<any>('span')`
  display: block;
  position: relative;
  min-width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  font-family: Font awesome\\5 Free;
  font-weight: 900;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  line-height: 19px;
  border-radius: 50%;
  border: solid 1px rgba(0, 0, 0, 0.28);
  transition: all 0.25s;
`;

export const CheckboxBox = styled<any>('div')`
  position: relative;
  margin-right: 11px;
  vertical-align: middle;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  ${(props) =>
    props.isChecked
    && `
    ${CheckMark}{
      border: none;
      background-color: ${props.theme.colors.blue};
      &::after {
      content: '';
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transform: scale(${props.size / BASE_ICO_SIZE});
      position: absolute;
      background: url(${checkIco}) no-repeat center center;
      }
    }
  `};
`;

export const CheckContent = styled.div`
  padding-left: 11px;
  width: 100%;
`;
