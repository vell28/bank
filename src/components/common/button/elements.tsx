import { css } from 'styled-components';

export const baseBtnCss = css`
  min-width: 210px;
  height: 30px;
  padding-right: 2px;
  color: ${(props) => props.theme.colors.blue};
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.9px;
  border: none;
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.white};
  transition: all 0.25s;
  outline: none;
  &:hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.white}50;
  }
`;

export const largeBtnCss = css`
  ${baseBtnCss};
  height: 40px;
  padding-right: 10px;
  line-height: 40px;
`;

export const outlineBtnCss = css`
  ${baseBtnCss};
  color: ${(props) => props.theme.colors.white};
  line-height: 26px;
  border: 1px solid ${(props) => props.theme.colors.white};
  background-color: transparent;
  &:hover {
    background-color: ${(props) => props.theme.colors.white}50;
  }
`;

export const outlineLightBtnCss = css`
  ${outlineBtnCss};
  border-color: ${(props) => props.theme.colors.white}30;
`;

export const dropdownBtnCss = css`
  position: relative;
  &:after {
    content: '\f078';
    position: absolute;
    top: 0;
    right: 12px;
    font-family: Font Awesome\\ 5 Free;
    font-weight: 900;
    font-size: 10px;
  }
  &.button-outline {
    &:after {
      top: 2px;
    }
  }
`;

export const activeBtnCss = css`
  color: #008cff;
  border: 1px solid #008cff;
  &:after {
    transform: rotate(180deg);
  }
  @media (hover: hover), (pointer: fine) {
    &:hover {
      color: #008cff;
      border: 1px solid #008cff;
      background-color: transparent;
      opacity: 0.8;
    }
  }
`;

export const iconBtnCss = css`
  position: relative;
  i {
    position: absolute;
    top: 50%;
    margin-top: -7px;
    &:first-child {
      left: 18px;
    }
    &:last-child {
      right: 18px;
    }
  }
  .button-badge {
    position: absolute;
    right: 11px;
    top: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.7px;
    line-height: 20px;
    color: ${(props) => props.theme.colors.white};
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.red};
  }
`;

export const circleBtnCss = css`
  width: 84px;
  height: 84px;
  min-width: 84px;
  padding: 0;
  display: inline-block;
  font-size: 17px;
  font-weight: 500;
  line-height: 84px;
  letter-spacing: 1.3px;
  text-align: center;
  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;
  border-radius: 50%;
  border-color: ${(props) => props.theme.colors.gray3};
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    color: ${(props) => props.theme.colors.white};
    border-color: ${(props) => props.theme.colors.blue};
    background-color: ${(props) => props.theme.colors.blue};
  }
`;

export const textBtnCss = css`
  padding-right: 2px;
  font-size: 16px;
  letter-spacing: 1.8px;
  color: ${(props) => props.theme.colors.blue};
  border: none;
  outline: none;
  text-decoration: none;
  background-color: transparent;

  &:hover,
  &:focus,
  &:active {
    color: ${(props) => props.theme.colors.blue};
    text-decoration: underline;
  }
`;
