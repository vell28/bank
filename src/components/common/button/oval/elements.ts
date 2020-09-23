import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 17px;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 19px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0.89px;
  cursor: pointer;
  transition: all 0.3 ease;

  &: hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
