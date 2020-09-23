import styled from 'styled-components';

export const SearchWrap = styled.div<any>`
  position relative;
  width: 100%;
`;

export const SearchField = styled.input<any>`
  width: 100%;
  min-height: 36px;
  height: 36px;
  margin-bottom: 15px;
  border-radius: 15px;
  background-color: rgba(230, 235, 239, 0.4);
  line-height: 35px;
  padding-left: 36px;
  outline: none;
  font-family: SFProText, sans-serif;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: normal;
  border: none;

  &::placeholder {
    font-size: 13px;
    letter-spacing: normal;
    color: ${({ theme }) => theme.colors.submarine};
  }
  &:-ms-input-placeholder {
    font-size: 13px;
    letter-spacing: normal;
    color: ${({ theme }) => theme.colors.submarine};
  }
`;

export const SearchIcon = styled.img<any>`
  width: 28px;
  height: 28px;
  position: absolute;
  left: 8px;
  top: 4px;
`;

export const PopupTitle = styled.h2`
  color: ${(props) => props.theme.colors.black};
  font-size: 17px;
  font-weight: 600;
  margin-top: 43px;
  margin-bottom: 8px;
`;

export const PopupDescription = styled.div`
  position: relative;
  height: calc(100% - 208px);
`;

export const PopupBtnWrap = styled<any>('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 90px;
  width: 100%;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.white};
  left: 0;
  padding-bottom: 14px;
`;

export const PopupBtn = styled<any>('button')`
  width: 200px;
  height: 30px;
  border-radius: 15px;
  border: solid 1px ${(props) => props.theme.colors.slate};
  font-size: 13px;
  font-weight: 600;
  font-stretch: normal;
  text-align: center;
  color: ${(props) => props.theme.colors.slate};
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    border-color: ${(props) => props.theme.colors.green1};
    color: ${(props) => props.theme.colors.green1};
  }
`;
