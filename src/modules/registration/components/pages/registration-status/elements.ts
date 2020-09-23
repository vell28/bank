import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
  min-height: 537px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrap = styled.div<any>`
  width: 716px;
  max-width: 100%;
  height: 537px;
  border-radius: 28px;
  padding: 140px 16% 60px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  ${switchProp('template', {
    blue: css`
      background-color: ${({ theme }) => theme.colors.navy};
    `,
    green: css`
      background-image: linear-gradient(
        324deg,
        ${({ theme }) => theme.colors.green1} 100%,
        ${({ theme }) => theme.colors.green4} -7%,
        ${({ theme }) => theme.colors.green4} -7%
      );
    `,
    red: css`
      background-image: linear-gradient(
        218deg,
        ${({ theme }) => theme.colors.red2} 135%,
        ${({ theme }) => theme.colors.red3} 7%
      );
    `,
  })}

  img {
    width: 250.1px;
    height: 276px;
    position: absolute;
    right: -46px;
    top: -36px;
  }
`;

export const Logo = styled.div`
  width: 44px;
  height: 40px;
  margin-bottom: 40px;

  img {
    position: static;
    width: 44px;
    height: 40px;
    object-fit: contain;
  }
`;

export const H2 = styled.h2`
  height: 20px;
  font-size: 17px;
  font-weight: 600;
  margin: 0 0 20px;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const TextWrap = styled.div<any>`
  ${switchProp('template', {
    blue: css`
      margin-bottom: 0;

      p {
        opacity: 0.5;
      }
    `,
    green: css`
      margin-bottom: 88px;
    `,
    red: css`
      margin-bottom: 44px;
    `,
  })}
`;

export const P = styled.p<any>`
  font-size: 15px;
  text-align: center;
  margin: 0;
  margin-bottom: 18px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Support = styled(Link)<any>`
  width: 120px;
  height: 30px;
  border-radius: 15px;
  font-size: 13px;
  text-transform: capitalize;
  background-color: rgba(255, 255, 255, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  margin-bottom: 40px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Ok = styled(Link)<any>`
  width: 280px;
  height: 44px;
  border-radius: 26px;
  border: solid 1px ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: normal;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;
