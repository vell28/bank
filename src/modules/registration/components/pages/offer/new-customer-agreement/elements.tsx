import styled from 'styled-components';

export const TitleBlock = styled.h2`
  width: 100%;
  height: 16px;
  font-family: SFProText, sans-serif;
  font-size: 14px;
  letter-spacing: -0.34px;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
`;

export const DescriptionBlock = styled.div`
  width: 100%;
  font-family: SFProText, sans-serif;
  font-size: 13px;
  line-height: 1.31;
  letter-spacing: -0.08px;
  text-align: justify;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 10px;
`;

export const DescriptionLightBlock = styled.div`
  width: 100%;
  font-family: SFProText, sans-serif;
  font-size: 13px;
  line-height: 1.31;
  letter-spacing: -0.08px;
  text-align: justify;
  color: ${(props) => props.theme.colors.gray3};
  margin-bottom: 10px;
`;
