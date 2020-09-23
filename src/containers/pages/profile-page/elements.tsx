import styled from 'styled-components';

export const PageErrorBox = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: ${(props) => props.theme.colors.darkBlue};
  z-index: 1;
  padding: 60px 0 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 72px;
`;

export const Columns = styled.div`
  display: flex;
`;

export const Column = styled.div`
  width: 50%;
  &:first-child {
    margin-right: 9px;
  }
  &:last-child {
    margin-left: 9px;
  }
`;

export const Link = styled.a`
  display: block;
  text-align: center;
  padding: 4px 10px;
  border-radius: 19px;
  border: 1px solid hsla(0, 0%, 100%, 0.3);
  color: #fff;
  font-size: 16px;
  letter-spacing: 0.89px;
  text-decoration: none;
  transition: all 0.3s;
  margin-bottom: 69px;
  cursor: pointer;
  &:hover {
    border: 1px solid ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.blue};
  }
`;

export const More = styled.div`
  margin-top: auto;
  text-align: center;
  color: ${(props) => props.theme.colors.red};
  font-size: 13px;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;
`;
