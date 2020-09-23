import styled from 'styled-components';

export const CloseBtnBox = styled.button`
  position: relative;
  width: 16px;
  height: 16px;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0;
  background: none;
  svg {
    fill: ${(props) => props.theme.colors.gray7};
    transition: all 0.3s;
    &:hover {
      fill: ${(props) => props.theme.colors.blue};
    }
  }
`;
