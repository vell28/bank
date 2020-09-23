import styled from 'styled-components';

import { NextBtn } from '../../common/button/next/elements';

export const PageErrorBox = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: ${(props) => props.theme.colors.darkBlue};
  z-index: 1;
  padding: 60px 0 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ImgBox = styled.div`
  width: 82px;
  display: block;
  img {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-weight: 400;
  margin-top: 77px;
  letter-spacing: 1.35px;
  line-height: 1.4;
  margin-bottom: 0;
  max-width: 340px;
`;

export const SubTitle = styled.h2`
  letter-spacing: 0.98px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.white};
  margin-top: 6px;
  font-size: 13px;
  opacity: 0.3;
`;

export const OkBtn = styled(NextBtn)`
  margin-top: 36px;
  width: 100px;
  height: 100px;
  color: ${(props) => props.theme.colors.white} !important;
  background-color: ${(props) => props.theme.colors.darkBlue} !important;
`;

export const SupportLink = styled.a`
  font-size: 18px;
  text-decoration: underline;
  margin-top: 30px;
`;

export const WaitClock = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.white};
  opacity: 0.3;
  &:after {
    left: 45px;
    top: 22px;
    position: absolute;
    content: '';
    width: 30px;
    height: 40px;
    border-top: 1px solid ${(props) => props.theme.colors.white};
    border-left: 1px solid ${(props) => props.theme.colors.white};
    transform: skewY(20deg) scale(1, -1);
  }
`;
