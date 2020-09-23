import styled from 'styled-components';

export const ActionBtn = styled.button`
  position: relative;
  letter-spacing: 0.9px;
  padding-right: 2px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.blue};
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  &:hover {
    opacity: 0.85;
  }
`;
