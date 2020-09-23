import styled from 'styled-components';
import { AppBox } from 'containers/app/elements';

export const SignInBox = styled(AppBox)<any>`
  width: 100%;
  padding-top: 200px;
  padding-bottom: 100px;
  position: relative;
  justify-content: space-between;

  ${({ isStartPage }) =>
    isStartPage
    && `
    & > div:first-child {
      margin-bottom: -90px;
    }
  `}
`;

export const SignInInner = styled.div<any>`
  width: 375px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const LogoBox = styled.div`
  img {
    width: 420px;
    object-fit: contain;
  }
`;
