import styled from 'styled-components';

export const ScanBtnBox = styled.button`
  position: relative;
  width: 40px;
  height: 37px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  outline: none;
  span {
    font-size: 10px;
    letter-spacing: 0.75px;
    text-align: center;
    color: ${(props: any) => props.theme.colors.blue};
  }
`;

const AngleLeft = styled.span`
  position: absolute;
  left: 0;
  width: 12px;
  height: 12px;
  border-color: ${(props: any) => props.theme.colors.blue};
`;

const AngleRight = styled(AngleLeft)`
  right: 0;
  left: auto;
`;

export const AngleLeftTop = styled(AngleLeft)`
  top: 0;
  border-left: 1px solid;
  border-top: 1px solid;
`;

export const AngleLeftBottom = styled(AngleLeft)`
  bottom: 0;
  border-left: 1px solid;
  border-bottom: 1px solid;
`;

export const AngleRightTop = styled(AngleRight)`
  top: 0;
  border-right: 1px solid;
  border-top: 1px solid;
`;

export const AngleRightBottom = styled(AngleRight)`
  bottom: 0;
  border-right: 1px solid;
  border-bottom: 1px solid;
`;
