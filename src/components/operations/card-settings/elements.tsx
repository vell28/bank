import styled from 'styled-components';

export const UnblockBox = styled.div`
  .popup-description {
    margin-bottom: 80px;
    padding-top: 20px;
  }
`;

export const CardSettingBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 15px 57px 24px;
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.white};
`;

export const CardDataPreviewBox = styled.div`
  width: 100%;
  padding-top: 12px;
`;

export const BlockCardBtn = styled.div`
  position: relative;
  padding: 0 29px;
  display: inline-block;
  color: ${(props) => props.theme.colors.blue};
  font-size: 16px;
  letter-spacing: 1.8px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const BtnsBox = styled.div`
  position: relative;
  margin-top: 36px;
  text-align: center;
`;
