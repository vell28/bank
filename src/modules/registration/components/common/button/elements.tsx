import styled from 'styled-components';

export const Button = styled.button<any>`
  min-width: 280px;
  height: 44px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 26px;
  outline: none;
  font-size: inherit;
  letter-spacing: 0.75px;
  text-align: center;
  color: ${(props: any) => props.theme.colors.white};

  &: disabled {
    opacity: 0.4;
  }
`;
