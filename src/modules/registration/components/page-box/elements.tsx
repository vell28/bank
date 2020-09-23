import styled from 'styled-components';

import { headerHeight } from '../head/elements';

export const BoxOuter = styled.div`
  background: ${(props) => props.theme.colors.darkBlue};
  height: 100%;
`;

export const BoxInner = styled.div`
  position: relative;
  display: block;
  min-height: 100vh;
`;

export const BoxDystrophic = styled.div`
  width: 485px;
  margin: 0 auto;
`;

export const BoxTight = styled.div`
  width: 644px;
  margin: 0 auto;
`;

export const BoxWide = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

export const BoxContent = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: calc(100vh - ${headerHeight});
`;

export const LeftSide = styled.div`
  position: relative;
  width: 256px;
`;

export const RightSide = styled.div`
  width: 712px;
`;
