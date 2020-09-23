import styled from 'styled-components';

export const LeftSidebar = styled.aside`
  width: 210px;
  min-width: 210px;
`;

export const RightSidebar = styled(LeftSidebar)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
