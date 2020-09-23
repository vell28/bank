import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const VideoWrap = styled.div`
  width: 462px;
  height: 402px;
  border-radius: 15px;
  overflow: hidden;
  margin-top: 19px;
  margin-bottom: 27px;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PopupBtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  padding-bottom: 14px;
`;
