import styled from 'styled-components';

export const Button = styled<any>('button')`
  width: 108px;
  height: 30px;
  border-radius: 15px;
  font-size: 13px;
  background: transparent;
  font-weight: normal;
  border: solid 1px ${(props: any) => props.theme.colors.white};
  color: ${(props: any) => props.theme.colors.white};
  cursor: pointer;
  outline: none;

  &:disabled {
    opacity: 0.4;
  }
`;
