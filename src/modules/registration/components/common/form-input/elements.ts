import styled from 'styled-components';

export const TextInput = styled.input<any>`
  height: 56px;
  padding: 0 26px;
  line-height: 56px;
  color: ${(props) => props.theme.colors.white};
  font-size: 15px;
  letter-spacing: 2.25px;
  border: none;
  border-bottom: ${(props) => (props.hasError ? `1px solid ${props.theme.colors.red} !important` : 'none')};
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
`;

export const Error = styled<any>('div')`
  font-size: 13px;
  white-space: nowrap;
  color: ${(props) => props.theme.colors.red};
`;
