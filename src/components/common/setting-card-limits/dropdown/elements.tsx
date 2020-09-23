import styled, { css, keyframes } from 'styled-components';

export const DropdownBox = styled.div`
  position: relative;
  align-self: center;
`;

export const ChildrenBox = styled<any>('div')`
  position: relative;
  z-index: ${(props) => (props.isActive ? 3 : 1)};
`;

export const InnerBox = styled<any>('div')`
  padding: 1px 0 1px 0;
  margin: 15px;
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.22);
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

export const opacityKey = keyframes`
  0%{opacity: 0;}
  100%{opacity: 1;}
`;

const opacityAnimation = css`
  animation: ${opacityKey} 0.8s ease-out;
`;

export const SidebarDropdown = styled<any>('div')`
  position: absolute;
  min-width: 215px;
  left: -93px;
  top: 12px;
  max-height: 300px;
  display: ${(props) => (props.isShown ? '' : 'none')};
  z-index: 2;
  border-radius: ${(props) => props.radius}px;

  ${(props) =>
    props.isShown
    && css`
      ${opacityAnimation};
    `};
`;
