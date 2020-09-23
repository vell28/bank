import styled from 'styled-components';

export const AppBox = styled.div`
  width: 1280px;
  height: 100%;
  min-height: 100vh;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.darkBlue};
  z-index: 1;
`;

export const HeaderBox = styled.header`
  width: 100%;
  padding: 0 30px;
  border-bottom: 0.5px solid hsla(0, 0%, 100%, 0.39);
  position: sticky;
  top: 0;
  z-index: 9;
  background-color: ${({ theme }) => theme.colors.darkBlue};
`;

export const PageBox = styled.main`
  width: 100%;
  padding: 23px 30px 20px;
  flex: 1;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`;

export const MainBox = styled.div`
  position: relative;
  z-index: 1;
  flex: 1;
  max-width: 540px;
  padding: 0 26px;
  width: 100%;
  align-items: stretch;
  max-height: 500px;
`;
