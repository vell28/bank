import styled from 'styled-components';

export const ControlLine = styled.div`
  display: flex;
  & > * + * {
    margin-left: 10px;
  }
`;
