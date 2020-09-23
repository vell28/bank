import styled from 'styled-components';

export const Textarea = styled<any>('textarea')`
  height: 110px;
  padding: 19px 26px;
  line-height: inherit;
  color: ${(props) => props.theme.colors.white};
  font-size: 15px;
  letter-spacing: 2.25px;
  border: 1px solid transparent;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.07);
  outline: none;
  width: 100%;
  resize: none;
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
