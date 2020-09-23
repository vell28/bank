import styled from 'styled-components';

import { headerHeight } from '../head/elements';

export const pagePaddingBottom = '80px';

export const PageOuter = styled.div`
  flex: 1;
  padding-bottom: ${pagePaddingBottom};
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - ${pagePaddingBottom} - ${headerHeight});
`;

export const PageHeader = styled.div`
  font-size: 17px;
  font-weight: 600;
  font-size: 28px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.white};
`;

export const PageContent = styled.div`
  margin-top: 44px;
`;

export const StepDescription = styled.div`
  width: 646px;
  margin-bottom: 44px;
  font-size: 15px;
  letter-spacing: 1.07px;
  color: ${(props) => props.theme.colors.feijoa};
`;

export const Text = styled.p`
  opacity: 0.8;
  font-size: 15px;
  line-height: normal;
  letter-spacing: 1.07px;
  color: ${(props) => props.theme.colors.white};
  margin: 30px 0;
`;

export const Section = styled.div`
  & + & {
    margin-top: 64px;
  }
`;

export const SectionHeader = styled(StepDescription)`
  width: auto;
  margin-bottom: 24px;
  letter-spacing: normal;
  font-weight: 600;
`;

export const NextButtonLine = styled.div`
  margin-top: 60px;
`;
