import styled from 'styled-components';

import * as S from '../disabled-video/elements';
import { CardBox } from '../../card/elements';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -25px;
`;

export const TopWrap = styled(Container)`
  flex-direction: row;
  margin-top: 0;
  margin-bottom: 6px;
  justify-content: space-between;
`;

export const BottomWrap = styled(CardBox)`
  padding: 0;
  position: relative;
  height: 189px;
`;

export const Title = styled(S.Title)`
  margin: 0;
  font-weight: normal;
  letter-spacing: 0.98px;
`;

export const Cancel = styled.span`
  margin: 0;
  font-weight: normal;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
  transition: all 0.3 ease;
  letter-spacing: 0.98px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const AngleLeft = styled.span`
  position: absolute;
  left: 12px;
  width: 50px;
  height: 50px;
  color: ${({ theme }) => theme.colors.green2};
`;

const AngleRight = styled(AngleLeft)`
  right: 12px;
  left: auto;
`;

export const AngleLeftTop = styled(AngleLeft)`
  top: 12px;
  border-left: 1px solid;
  border-top: 1px solid;
`;

export const AngleLeftBottom = styled(AngleLeft)`
  bottom: 12px;
  border-left: 1px solid;
  border-bottom: 1px solid;
`;

export const AngleRightTop = styled(AngleRight)`
  top: 12px;
  border-right: 1px solid;
  border-top: 1px solid;
`;

export const AngleRightBottom = styled(AngleRight)`
  bottom: 12px;
  border-right: 1px solid;
  border-bottom: 1px solid;
`;
