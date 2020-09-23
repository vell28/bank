import styled from 'styled-components';

import { headerHeight } from '../head/elements';

export const BoxOuter = styled.div`
  height: 100%;
  min-height: calc(100vh - ${headerHeight});
  border-right: 2px dashed rgba(255, 255, 255, 0.3);
`;

export const BoxInner = styled.div`
  padding: 20px;
`;

export const Step = styled.div`
  margin-bottom: 40px;
  font-size: 15px;
  opacity: 0.3;
`;

export const ActiveStep = styled(Step)`
  font-weight: bold;
  opacity: 1;
`;

export const CompletedStep = styled(Step)`
  color: ${(props) => props.theme.colors.feijoa};
  font-weight: bold;
  opacity: 1;
`;
