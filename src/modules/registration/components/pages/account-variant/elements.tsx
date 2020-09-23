import styled from 'styled-components';

export const LogoBox = styled.div`
  img {
    width: 190px;
    object-fit: contain;
  }
`;

export const Header = styled.div`
  margin-top: 150px;
  font-size: 13px;
`;

export const Buttons = styled.div`
  margin-top: 30px;
  & > * + * {
    margin-top: 24px;
  }
`;
