import styled, { css, keyframes } from 'styled-components';

export const gradientKey = keyframes`
  0%{transform: translateX(-100%);}
    100%{transform: translateX(200%);}
`;

const animationGradient = css`
  animation: ${gradientKey} 2.3s infinite linear;
`;

export const SkeletonLine = styled<any>('div')`
  position: relative;
  height: ${(props) => props.height || 10}px;
  width: ${(props) => props.width || 100}%;
  border-radius: 25px;
  opacity: 0.51;
  overflow: hidden;
  background-image: linear-gradient(92deg, #2c5175, #1c3c5d);
  &:after {
    content: '';
    opacity: 0.51;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(157, 198, 240, 0) 0%,
      rgba(157, 198, 240, 1) 52%,
      rgba(157, 198, 240, 0) 100%
    );
    ${animationGradient};
  }
`;

export const SkeletonBlock = styled.div`
  width: 100%;
  margin-bottom: 60px;
  &:last-child {
    margin-bottom: 0;
  }

  ${SkeletonLine} {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
