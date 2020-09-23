import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const Input = styled(InputMask)<any>`
  padding: 2px 58px;
  padding-right: 10px;
  padding-left: 10px;
  height: auto;
  text-align: center;
  color: ${(props) => (props.hasError ? props.theme.colors.red : props.theme.colors.black)};
  font-size: 30px;
  letter-spacing: 2.25px;
  border: none;
  border-bottom: 1px solid ${(props) => (props.hasError ? `${props.theme.colors.red}70` : 'rgba(161, 182, 178, 0.38)')};
  outline: none;
  width: 100%;
  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.submarine};
    font-size: 17px;
  }
  &:-ms-input-placeholder {
    color: ${(props) => props.theme.colors.submarine};
    font-size: 17px;
  }
  &::-ms-input-placeholder {
    color: ${(props) => props.theme.colors.submarine};
    font-size: 17px;
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.submarine};
    font-size: 17px;
  }
`;
