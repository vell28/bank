import styled from 'styled-components';
import { TinyBtn } from '../filters/elements';

export const ReceiptBox = styled.div`
  position: relative;
  min-height: 100%;
  width: 100%;
  height: auto;
  background: ${(props) => props.theme.colors.white};
  z-index: 2;
`;

export const ReceiptTitle = styled.h2`
  position: relative;
  margin-bottom: 17px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.89px;
`;

export const CloseBtn = styled.span`
  position: absolute;
  top: -9px;
  right: 0;
  cursor: pointer;
  color: ${(props) => props.theme.colors.gray7};
  font-size: 30px;
  transform: rotate(225deg);
`;

export const ActionBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 17px;
  padding: 9px 0;
  border-top: 1px solid ${(props) => props.theme.colors.grayLight};
  border-bottom: 1px solid ${(props) => props.theme.colors.grayLight};
`;

export const ActionBtn = styled(TinyBtn)`
  font-size: 14px;
  padding: 0;
`;

export const ReceiptItem = styled.div`
  margin-bottom: 15px;
`;
export const ReceiptParagraph = styled.div`
  margin-bottom: 0;
  color: ${(props) => props.theme.colors.black};
  font-size: 11px;
  letter-spacing: 0.5px;
  word-wrap: break-word;
`;

export const ReceiptSubTitle = styled.div`
  margin-bottom: 2px;
  color: ${(props) => props.theme.colors.gray};
  font-weight: 400;
  font-size: 11px;
  letter-spacing: 0.5px;
`;

export const ReceiptRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
