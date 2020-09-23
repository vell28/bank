import styled from 'styled-components';

export const Input = styled<any>('input')`
  height: 56px;
  padding: 0 26px;
  line-height: 56px;
  color: ${(props) => props.theme.colors.white};
  font-size: 15px;
  letter-spacing: 2.25px;
  border: 1px solid transparent;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.07);
  outline: none;
  width: 100%;

  &::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
  &:-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
  &::-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
  ${(props) =>
    props.hasError
    && `
    color: ${props.theme.colors.red};
    border: 1px solid ${props.theme.colors.red};
  `};
`;
