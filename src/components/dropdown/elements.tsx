import styled, { css, keyframes } from 'styled-components';

export const DropdownBox = styled.div`
  position: relative;
  width: 100%;
`;

export const ChildrenBox = styled.div`
  position: relative;
`;

export const InnerBox = styled<any>('div')`
  padding: 15px 2px 16px 0;
  margin-top: 15px;
  color: ${(props) => props.theme.colors.black};
  height: auto;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.radius}px;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    margin-left: -10px;
    border: 10px solid transparent;
    border-bottom: 5px solid ${(props) => props.theme.colors.white};
  }
`;

export const key = keyframes`
  0%{max-height: 60px;}
  25%{max-height: 300px;}
  100%{max-height: 600px;}
`;

const animation = css`
  animation: ${key} 0.4s linear;
`;

export const opacityKey = keyframes`
  0%{opacity: 0;}
  100%{opacity: 1;}
`;

const opacityAnimation = css`
  animation: ${opacityKey} 0.8s ease-out;
`;

export const DropContainer = styled<any>('div')`
  position: absolute;
  width: 100%;
  max-height: 0;
  overflow: hidden;
  z-index: 2;
  border-radius: ${(props) => props.radius}px;
  &.shown {
    max-height: 90vh;
    ${animation};
    ${InnerBox} {
      div {
        opacity: 1;
        ${opacityAnimation};
      }
    }
  }
`;
