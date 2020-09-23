import styled from 'styled-components';

import ArrowIcon from './arrow.svg';

export const Select = styled<any>('select')`
  width: 100%;
  height: 56px;
  padding-left: 26px;
  padding-right: 46px;
  appearance: none;
  outline: none;
  border: none;
  border: 1px solid transparent;
  border-radius: 20px;
  background-image: url(${ArrowIcon});
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-color: rgba(255, 255, 255, 0.07);
  line-height: 56px;
  font-size: 15px;
  letter-spacing: 2.25px;
  color: ${(props) => `${props.theme.colors.white}${props.value ? '' : '4d'}`};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  ${(props) =>
    props.hasError
    && props.value
    && `
    color: ${props.theme.colors.red};
  `};
  ${(props) =>
    props.hasError
    && `
    border: 1px solid ${props.theme.colors.red};
  `};
`;
