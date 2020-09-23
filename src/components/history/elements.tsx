import styled from 'styled-components';

import { textBtnCss } from '../common/button/elements';

import { TinyBtn } from './filters/elements';

export const FiltersBtn = styled.div`
  ${textBtnCss};
  width: 100%;
  margin-bottom: 8px;
  padding: 0;
  text-align: center;
  letter-spacing: 0.9px;
  cursor: pointer;
`;

export const FiltersBox = styled<any>('div')`
  height: auto;
  max-height: 0;
  overflow: hidden;
  width: 100%;
  transition: all 0.3s ease;
  position: relative;

  ${(props) =>
    props.isShown
    && `
      position: static;
      transition: all 0.3s ease;
      max-height: 400px;
      margin-bottom: 18px;
   `};
`;

export const HistoryScroll = styled.div`
  padding: 0 15px;
  position: relative;
  height: calc(100vh - 200px);
  overflow: auto;
  .infinite-scroll-component {
    position: relative;
    overflow: hidden !important;
    min-height: 300px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.white};
    margin: 42px 0 33px 0;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.gray};
    border-radius: 3px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.gray} 60%;
  }
`;

export const HistoryDate = styled.div`
  position: relative;
  margin-top: 11px;
  font-size: 12px;
  letter-spacing: 0.5px;
  text-align: center;
  color: ${(props) => props.theme.colors.gray};
  overflow: hidden;
  span {
    position: relative;
    padding: 0 2px;
    z-index: 1;
    background: ${(props) => props.theme.colors.white};
  }
  &:before {
    position: absolute;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.colors.grayLight};
    left: 0;
    top: 9px;
    content: '';
  }
`;

export const HistoryItem = styled.div`
  margin-top: 9px;
  ul {
    list-style-type: none;
    margin: 5px 0 0;
    padding: 0;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      text-transform: lowercase;
      span:last-child {
        letter-spacing: 1.1px;
      }
    }
    li + li {
      margin-top: 9px;
    }
  }
`;

export const ActionBtn = styled(TinyBtn)`
  font-size: 14px;
  padding: 0;
`;

export const FlexLi = styled.li`
  display: flex;
  justify-content: space-around !important;
`;

export const Line = styled.li`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const HistoryItemTitle = styled.div`
  font-size: 14px;
  letter-spacing: 0.8px;
  text-transform: lowercase;
  color: ${(props) => props.theme.colors.gray2};
`;
