import styled from 'styled-components';

import { FormGroup } from '../../../common/form-group';
import { PageOuter } from '../../../page-content';

export const Container = styled(PageOuter)<any>`
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
`;
// eslint-disable sonarjs/no-identical-functions
export const InputWrap = styled(FormGroup)<any>`
  position: relative;
  margin-bottom: 40px;

  & > div:first-child {
    ${({ disabled }) =>
    disabled
      && `
        opacity: .4;
        pointer-events: none;
      `};
  }

  input {
    height: 56px;
    padding: 0 26px;
    line-height: 56px;
    color: ${(props) => props.theme.colors.white};
    font-size: 15px;
    letter-spacing: 2.25px;
    border: none;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.07);
    outline: none;
    width: 100%;
    padding-left: 90px;

    &::-webkit-input-placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
    &:-ms-input-placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
    &::-ms-input-placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
    &::placeholder {
      color: rgba(255, 255, 255, 0.3);
    }

    ${({ disabled }) =>
    disabled
      && `
        opacity: .4;
        pointer-events: none;
      `};

    &:nth-child(2) {
      padding-left: 27px;
    }
  }

  button {
    ${({ disabled }) =>
    disabled
      && `
        opacity: .4;
        pointer-events: none;
      `};
    position: absolute;
    top: 13px;
    right: 27px;
    z-index: 3;
  }
`;

export const Placeholder = styled.span<any>`
  font-size: 15px;
  letter-spacing: 2.25px;
  border: none;
  border-radius: 20px;
  background-color: transparent;
  position: absolute;
  top: 18px;
  left: 88px;
  opacity: 0.3;
`;

export const TopWrap = styled.div<any>`
  display: flex;
  flex-direction: column;

  label {
    font-size: 15px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.07px;
  }
`;

export const PhoneNumber = styled.div<any>`
  cursor: pointer !important;
  width: 96px;
  padding-left: 27px;
  position: absolute;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 2;

  span {
    &:first-child {
      opacity: ${(props) => (props.opacity ? '1' : '0.3')};
      padding-right: 6px;
    }
    &:nth-child(2) {
      background: url(/img/arrow-select-white.svg) no-repeat center right 18px;
      height: 100%;
      width: 16px;
      background-position: center;
      margin-right: 12px;
    }
  }
`;
