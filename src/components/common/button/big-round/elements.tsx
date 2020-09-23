import styled from 'styled-components';

export const BigRoundBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 50%;
  border: 1px solid #a1aab6;
  padding: 10px;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s;
  width: 190px;
  height: 190px;
  margin-top: 107px;
  color: ${(props: any) => props.theme.colors.blue};
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.48px;
`;
