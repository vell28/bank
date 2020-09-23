import styled from 'styled-components';

import { Box as StepBox } from 'components/operations/steps/elements';

export const Box = styled(StepBox)`
  max-width: none;
  color: ${(props) => props.theme.colors.black};
`;

export const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 12px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.alto};
`;

export const SectionItem = styled.div`
  width: 50%;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const CurrencyItem = styled(SectionItem)`
  width: 50%;
`;

export const AccountItem = styled(SectionItem)`
  width: 33.333333%;
`;
