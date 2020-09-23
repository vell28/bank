import styled from 'styled-components';

export const Input = styled<any>('input')`
  height: 22px;
  line-height: 22px;
  font-weight: ${(props) => (props.bold ? 600 : 400)};
  color: ${({ theme, hasError }) => (!hasError ? theme.colors.black : theme.colors.red)} !important;
  font-size: 17px;
  letter-spacing: 1.13px;
  border: none;
  border-bottom: 1px solid ${(props) => (props.hasError ? `${props.theme.colors.red}70 !important` : 'transparent')};
  outline: none;
  width: 100%;

  &::placeholder {
    font-size: 17px;
    letter-spacing: 1.13px;
    color: ${({ theme }) => theme.colors.gray};
  }
  &:-ms-input-placeholder {
    font-size: 17px;
    letter-spacing: 1.13px;
    color: ${({ theme }) => theme.colors.gray};
  }
  &::-ms-input-placeholder {
    font-size: 17px;
    letter-spacing: 1.13px;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.black};
  font-size: 12px;
  margin-top: 5px;
  letter-spacing: 1px;
`;
