import styled from 'styled-components';

export const PopupOverlay = styled<any>('div')`
  backdrop-filter: blur(20px);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: rgba(1, 31, 61, 0.83);
  cursor: pointer;
  transition: transform 0.2s ease;
  visibility: visible;
  opacity: 1;
  user-select: none;
  justify-content: center;
  -webkit-overflow-scrolling: touch;
  ${(props) =>
    props.hidden
    && `
    visibility: hidden;
    opacity: 0;
    z-index: -1;
  `};
`;

export const PopupInner = styled<any>('div')`
  position: relative;
  padding: 80px 42px 39px;
  color: ${(props) => props.theme.colors.black};
`;

export const PopupBox = styled<any>('div')`
  position: relative;
  flex-shrink: 0;
  margin-top: auto;
  margin-bottom: auto;
  background: ${(props) => props.theme.colors.white};
  transform: scale(1);
  cursor: auto;
  opacity: 1;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  width: 320px;
  border-radius: 17px;
  ${(props) => props.minHeight && `min-height: ${props.minHeight}px;`};
  ${(props) =>
    props.hidden
    && `
    width: 60%;
    border-radius: 4px;
    transform: scale(0.8);
  `};

  &.country {
    width: 520px;
    margin-top: 103px;
    margin-bottom: 103px;
    height: 580px;

    ${PopupInner} {
      padding: 0 50px !important;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  }
`;

export const PopupClose = styled.div`
  color: ${(props) => props.theme.colors.gray7};
  position: absolute;
  cursor: pointer;
  font-size: 30px;
  top: 10px;
  right: 22px;
  transform: rotate(-315deg);
  z-index: 2;
  &:hover {
    color: ${(props) => props.theme.colors.black};
  }
`;
