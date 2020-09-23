import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

export const CountryList = styled<any>(Scrollbars)`
  width: 100%;
  overflow: auto;
  padding-left: 20px;
  color: black;
  height: 100%;
  margin-bottom: 0;
  overflow-x: hidden;

  & > div {
    &:nth-child(2) {
      display: none;
    }

    &:nth-child(3) {
      & > div {
        width: 4px !important;
        height: 12px !important;
        border-radius: 2px !important;
        background-color: ${({ theme }) => theme.colors.white2} !important;
      }
    }
  }

  &: hover {
    cursor: pointer;
  }
`;

export const CheckedElement = styled.img`
  width: 28px;
  height: 28px;
`;

export const CountryListElement = styled.div<any>`
  width: 97%;
  height: 56px;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    opacity: 0.8;
    border-top: 1px solid ${(props) => props.theme.colors.green3};
    border-bottom: 1px solid ${(props) => props.theme.colors.green3};

    p {
      color: ${(props) => props.theme.colors.black};
    }
  }
  ${(props) =>
    props.isChecked
    && `
    border-top: 1px solid ${props.theme.colors.green3};
    border-bottom: 1px solid ${props.theme.colors.green3};
  `}
`;

export const TitleName = styled.p<any>`
  font-family: SFProText, sans-serif;
  font-size: 15px;
  font-weight: 600 !important;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => props.theme.colors.black};
  margin-left: 16px;
  margin-bottom: 0;
  height: 20px;
`;

export const RowElement = styled.div`
  display: flex;
  align-items: center;
`;

export const CodeNumb = styled.p<any>`
  height: 20px;
  font-family: Avenir, sans-serif;
  font-size: 15px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  margin: 0;
  color: ${(props) => (props.isChecked ? props.theme.colors.black : props.theme.colors.submarine)};
`;

export const FlagIcon = styled.img<any>`
  width: 36px;
  height: 36px;
  border-radius: 10px;
`;
