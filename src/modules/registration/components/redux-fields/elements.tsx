import styled from 'styled-components';

export const FieldError = styled<any>('div')`
  font-size: 12px;
  white-space: nowrap;
  position: absolute;
  color: ${(props) => props.theme.colors.red};
  text-align: center;
  bottom: -25px;
  width: 100%;
`;

export const FormGroup = styled<any>('div')`
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  ${(props) =>
    props.hasError
    && `
    input {
      color: ${props.theme.colors.red};
      border: 1px solid ${props.theme.colors.red};
    }
  `};
  input {
    border-radius: 20px;
  }
`;
