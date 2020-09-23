import styled from 'styled-components';

export const LogoBox = styled.div`
  img {
    width: 44px;
  }
`;

export const Header = styled.div`
  margin-top: 16px;
  font-size: 17px;
  font-weight: 600;
`;

export const DescriptionBlock = styled.div`
  margin-top: 16px;
  font-size: 15px;
  width: 235px;
  text-align: center;
`;

export const ButtonDescription = styled.div`
  opacity: 0.5;
  text-align: center;
  margin: 80px 0 24px;
  font-size: 15px;
`;

export const ContinueContainer = styled.div`
  & > button {
    background-color: #5ba00f;
    border-color: #5ba00f;
  }
`;
