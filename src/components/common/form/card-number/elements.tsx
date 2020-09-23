import styled from 'styled-components';
import InputMask from 'react-input-mask';

import { Error, FormGroup } from '../elements';

export const Input = styled(InputMask)<any>`
  height: auto;
  padding: 4px 10px;
  line-height: 22px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: rgba(161, 170, 182, 0.09);
  color: ${(props) => props.theme.colors.black};
  font-family: Menlo, monospace;
  font-size: 15px;
  text-align: center;
  outline: none;
  border: none;
  width: 100%;
  &::placeholder {
    font-size: 13px;
    letter-spacing: 1.13px;
    color: ${(props) => props.theme.colors.submarine};
    font-family: 'AvenirNext', sans-serif;
    text-transform: uppercase;
  }
  &:-ms-input-placeholder {
    font-size: 13px;
    letter-spacing: 1.13px;
    color: ${(props) => props.theme.colors.submarine};
    font-family: 'AvenirNext', sans-serif;
    text-transform: uppercase;
  }
  &::-ms-input-placeholder {
    font-size: 123px;
    letter-spacing: 1.13px;
    color: ${(props) => props.theme.colors.submarine};
    font-family: 'AvenirNext', sans-serif;
    text-transform: uppercase;
  }
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardLabel = styled.div`
  margin-right: 5px;
  color: ${(props) => props.theme.colors.black};
  font-size: 9px;
  letter-spacing: .68px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
}`;

export const CardError = styled(Error)`
  height: 20px;
  font-size: 12px;
  letter-spacing: 0.9px;
  position: absolute;
  top: 0;
  text-align: left;
`;

export const CardFormGroup = styled(FormGroup)`
  padding: 21px 0 0 0;
`;
