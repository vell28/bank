import styled from 'styled-components';

import { Error, FormGroup as Group } from '../../../../common/form/elements';

export const Input = styled<any>('input')`
  height: auto;
  text-align: left;
  color: ${(props) => (props.hasError ? props.theme.colors.red : props.theme.colors.white)};
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  padding-bottom: 10px;
  font-size: 17px;
  &::-webkit-input-placeholder {
    color: #b6bcc4;
    font-size: 17px;
  }
  &:-ms-input-placeholder {
    color: #b6bcc4;
    font-size: 17px;
  }
  &::-ms-input-placeholder {
    color: #b6bcc4;
    font-size: 17px;
  }
  &::placeholder {
    color: #b6bcc4;
    font-size: 17px;
  }
`;

export const FieldError = styled(Error)`
  text-align: center;
  position: absolute;
  bottom: -25px;
  width: 100%;
`;

export const FormGroup = styled(Group)`
  display: flex;
  border-bottom: 1px solid ${(props) => (props.hasError ? `${props.theme.colors.red}70` : 'white')};
`;

export const Prefix = styled.div`
  width: 55px;
  margin-bottom: 10px;
  margin-right: 15px;
  border-right: 1px solid ${(props) => props.theme.colors.white};
`;
