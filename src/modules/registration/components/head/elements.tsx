import styled from 'styled-components';

export const headerHeight = '120px';

export const BoxOuter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: ${headerHeight};
`;

export const BoxInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 0 20px;
`;

export const Left = styled.div`
  width: 120px;
`;

export const Right = styled.div`
  width: 120px;
`;

export const Middle = styled.div`
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
  letter-spacing: 1.64px;
`;

export const HeaderPrefix = styled.span`
  opacity: 0.3;
`;

export const HeaderTitle = styled.span`
  opacity: 1;
`;
