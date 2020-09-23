import styled, { css, keyframes } from 'styled-components';

export const clipKey = (start: string, end: string) => keyframes`
0% { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${start}, ${end} ${start}, ${end} ${end}, ${start} ${end}, ${start} 50%, 50% 50%, ${start} 50%, ${start} ${end}, ${end} ${end}, ${end} ${start}, 0% ${start}); }
  14.${start} { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${start}, ${end} ${start}, ${end} ${end}, 50% ${end}, 50% 50%, 50% 50%, ${start} 50%, ${start} ${end}, ${end} ${end}, ${end} ${start}, 0% ${start}); }
  28.5% { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${start}, ${end} ${start}, ${end} 50%, 50% 50%, 50% 50%, 50% 50%, ${start} 50%, ${start} ${end}, ${end} ${end}, ${end} ${start}, 0% ${start}); }
  42.${end} { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${start}, ${start} ${start}, ${start} 50%, ${start} 50%, ${start} 50%, ${start} 50%, ${start} 50%, ${start} ${end}, ${end} ${end}, ${end} ${start}, 0% ${start}); }
  57% { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${end}, ${start} ${end}, ${start} ${end}, ${start} ${end}, ${start} ${end}, ${start} ${end}, ${start} ${end}, ${start} ${end}, ${end} ${end}, ${end} ${start}, 0% ${start}); }
  71.${start} { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, ${end} 100%, ${end} ${end}, ${end} ${end}, ${end} ${end}, ${end} ${end}, ${end} ${end}, ${end} ${end}, ${end} ${end}, ${end} ${end}, ${end} ${end}, ${end} ${start}, 0% ${start}); }
  85.5% { clip-path: polygon(0% 0%, 100% 0%, 100% ${start}, ${end} ${start}, ${end} ${start}, ${end} ${start}, ${end} ${start}, ${end} ${start}, ${end} ${start}, ${end} ${start}, ${end} ${start}, ${end} ${start}, ${end} ${start}, ${end} ${start}, 0% ${start}); }
  100% {clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% ${start}, 0% ${start}, 0% ${start}, 0% ${start}, 0% ${start}, 0% ${start}, 0% ${start}); }
`;

const animationClip = (percent: number) => {
  const start = `${percent}%`;
  const end = `${100 - percent}%`;
  return css`
    animation: ${clipKey(start, end)} 1s ease-in-out reverse;
  `;
};

export const MainContainer = styled<any>('section')`
  position: relative;
  height: auto;
  min-height: 100%;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.colors.darkBlue};
  margin-bottom: 25px;

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 25px;
    pointer-events: none;
  }
  &.animation:after {
    border: 1px solid ${(props) => props.theme.colors.white};
    ${(props) => animationClip(props.percent)};
  }
`;

export const MainBorderContainer = styled(MainContainer)`
  border: 1px solid ${(props) => props.theme.colors.white};
  padding: 77px 43px 12px;
  border-radius: 25px;
`;

export const MainFillContainer = styled<any>('section')`
  position: relative;
  height: 495px;
  width: 520px;
  padding: 43px 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 15px;
`;
