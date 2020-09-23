import styled from 'styled-components';

export const FilterBox = styled.div`
  position: relative;
`;

export const FilterLine = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 9px 0;
  flex-wrap: wrap;
  border-bottom: 1px solid ${(props) => props.theme.colors.grayLight};
  padding-top: 60px;
  &:first-child {
    padding-top: 0;
  }
`;

export const TinyBtn = styled.span`
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.blue};
  transition: all 0.3s;
  cursor: pointer;
  font-size: 10px;
  letter-spacing: 0.6px;
`;

export const FilterItem = styled<any>('span')`
  margin-right: 4px;
  margin-bottom: 8px;
  display: block;
  padding: 2px 8px;
  border-radius: 14px;
  border: 1px solid ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.blue};
  font-size: 10px;
  letter-spacing: 0.6px;
  cursor: pointer;
  line-height: normal;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
  }

  ${(props) =>
    props.isActive
    && `
    background-color: ${props.theme.colors.blue};
    color: ${props.theme.colors.white};
  `};
`;

export const CalendarLine = styled(FilterLine)`
  padding: 0;
  position: absolute;
  align-items: center;
  width: 100%;
  height: 40px;
  top: 30px;
  z-index: 99;

  .flatpickr-wrapper {
    position: static !important;
    width: 100%;
  }

  #calendar {
    left: 0;
    bottom: 0;
  }

  .flatpickr-calendar {
    top: 27px;
    width: 99% !important;
    padding: 12px 0 !important;
    left: 1px;
  }

  .dayContainer {
    padding: 0 10px !important;
  }

  .flatpickr-day {
    max-width: 21px !important;
    height: 21px !important;
    line-height: 21px !important;
  }
`;

export const CalendarWrap = styled<any>('div')`
  position: relative;
  left: -5px;
  bottom: 50px;
`;

export const CalendarBtn = styled(TinyBtn)`
  position: relative;
  left: 58px;
  white-space: pre;
  top: 13xp;
  bottom: 5px;
`;
