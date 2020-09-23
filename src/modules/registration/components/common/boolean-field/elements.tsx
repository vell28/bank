import styled from 'styled-components';
import checkIcon from './images/check.svg';

export const BooleanFieldContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LabelContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CheckBoxContainer = styled.label`
  display: flex;
  cursor: pointer;
`;

export const CheckBoxInput = styled.input`
  width: 28px;
  height: 28px;
  -webkit-appearance: none;
  border: solid 2px ${(props) => props.theme.colors.grayLight};
  border-radius: 4px;

  &:focus {
    outline: none;
  }

  &:checked {
    border: none;
    background-color: ${(props) => props.theme.colors.green1};
    background: url(${checkIcon}) no-repeat center center;
  }
`;

export const CheckBoxSpan = styled.span`
  display: block;
  position: relative;
  font-weight: 900;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  line-height: 19px;
  border-radius: 50%;
  transition: all 0.25s;
`;

export const SliderContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  min-width: 60px;
  height: 34px;
`;

export const SliderInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:focus {
    outline: none;
  }

  &:checked + span {
    background-color: ${(props) => props.theme.colors.green1};
  }

  &:focus + span {
    box-shadow: 0 0 1px ${(props) => props.theme.colors.green1};
  }

  &:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

export const SliderSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.gray};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const Error = styled<any>('div')`
  font-size: 12px;
  white-space: nowrap;
  position: absolute;
  bottom: -20px;
  color: ${(props) => props.theme.colors.red};
  width: 100%;
  text-align: center;
`;
