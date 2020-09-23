import styled from 'styled-components';

export const Link = styled.a`
  cursor: pointer;
  line-height: normal;
  letter-spacing: 0.93px;
  font-size: 13px;
  color: ${(props) => props.theme.colors.malibu};
  &:hover {
    color: ${(props) => props.theme.colors.malibu};
  }
`;
