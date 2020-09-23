import styled from 'styled-components';
import { circleBtnCss } from '../../common/button/elements';

interface ITextInputProps {
  textWrap?: 'normal' | 'pre' | 'pre-wrap' | 'pre-line';
}

export const Box = styled.form`
  position: relative;
  width: 100%;
  max-width: 327px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const InputBox = styled.div`
  margin-top: 98px;
  margin-bottom: 60px;
`;

export const LargeBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  margin-bottom: 45px;
  color: ${(props) => props.theme.colors.black};
  font-size: 18px;
  font-family: Avenir, sans-serif;
  font-weight: 900;
  letter-spacing: -0.1px;
`;

export const Success = styled.div`
  margin: 0;
  margin-top: auto;
  margin-bottom: auto;
  color: ${(props) => props.theme.colors.blue};
  font-size: 24px;
  letter-spacing: 1px;
  text-align: center;
`;

export const NextBtn = styled<any>('button')`
  ${circleBtnCss};
  outline: none;
  font-size: 17px;
  letter-spacing: 1.28px;
  position: relative;
  width: 100px;
  height: 100px;
  pointer-events: ${(props) => (props.isLoading ? 'none' : 'auto')};
  background: transparent !important;
  ${(props) =>
    props.isDisabled
    && `
      color: ${props.theme.colors.gray} !important;
      border-color: ${props.theme.colors.gray} !important;
      pointer-events: none;
  `};
  &:focus,
  &:hover,
  &:active {
    color: ${(props) => props.theme.colors.blue} !important;
  }

  &: hover {
    opacity: 0.7;
  }
`;

export const NextBtnBox = styled.div`
  text-align: center;
  margin-bottom: 13px;
  margin-top: 37px;
`;

export const TextInputBox = styled.div<ITextInputProps>`
  position: relative;
  display: flex;
  flex-grow: 2;
  align-items: center;

  ${({ textWrap }) =>
    textWrap
    && `
    & > div > div > div {
      display: flex;
      flex-direction: column;
      padding-bottom: 0;
      height: 80px;

      & > div {
        position: static;
        white-space: ${textWrap} !important;
      }
    }
  `}
`;

export const DescriptionTitle = styled.div`
  span {
    font-size: 10px;
    letter-spacing: 0.72px;
    opacity: 0.3;
  }
`;

export const SingleInputBox = styled.div`
  position: relative;
  margin-top: 42px;
`;
