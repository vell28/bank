import styled, { css, keyframes } from 'styled-components';

export const spinKey = keyframes`
   from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`;

export const animationSpin = css`
  animation: ${spinKey} 0.8s infinite linear !important;
`;

export const SpinnerBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    ${animationSpin};
  }
`;

export const RelativeBox = styled.div`
  width: 100%;
  height: 30px;
  text-align: center;
  svg {
    ${animationSpin};
  }
`;
