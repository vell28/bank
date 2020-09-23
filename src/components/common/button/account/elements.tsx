import styled from 'styled-components';

export const AccountBtn = styled<any>('button')`
  position: relative;
  min-width: 78px;
  height: 34px;
  padding: 0 19px;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  border-radius: 19px;
  border: 1px solid hsla(0, 0%, 100%, 0.3);
  cursor: pointer;
  background: transparent;
  color: ${(props) => props.theme.colors.white};
  outline: none;
  &:active {
    top: 2px;
  }
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.white}50;
  }
`;
