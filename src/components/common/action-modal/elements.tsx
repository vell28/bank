import styled from 'styled-components';

import { ActionBtn } from '../button/action/elements';

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
  -webkit-overflow-scrolling: touch;
  ${(props) =>
    props.hidden
    && `
    visibility: hidden;
    opacity: 0;
    z-index: -1;
  `};
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

  ${(props) =>
    props.hidden
    && `
    width: 60%;
    border-radius: 4px;
    transform: scale(0.8);
  `};
`;

export const PopupInner = styled.div`
  padding: 0 43px;
  padding-top: 80px;
  padding-bottom: 39px;
  color: ${(props) => props.theme.colors.black};
`;

export const PopupTitle = styled.h2`
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 56px;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const PopupDescription = styled.div`
  margin-bottom: 61px;
  font-size: 15px;
  letter-spacing: 0.5px;
  text-align: center;
`;

export const ActionBLock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const PopupAction = styled<any>(ActionBtn)`
  color: ${(props) => (props.isReject ? props.theme.colors.red : props.theme.colors.blue)};
`;
