import styled from 'styled-components';

export const Container = styled.section`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ActionBlock = styled.div`
  margin-top: 35px;
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  font-family: SFProText, sans-serif;
  font-size: 13px;
  line-height: 1.31;
  letter-spacing: -0.08px;
  text-align: justify;
`;

export const CentralTextBlock = styled.p`
  margin-top: 40px;
  margin-bottom: 0;
  color: ${(props) => props.theme.colors.white};
  font-family: SFProText, sans-serif;
  font-size: 13.9px;
  font-weight: 600;
  text-align: center;
  color: white;
`;

export const PopupTitle = styled.h2`
  color: ${(props) => props.theme.colors.black};
  font-size: 17px;
  font-weight: 500;
  margin-top: 43px;
  margin-bottom: 8px;
`;
