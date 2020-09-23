import styled from 'styled-components';
import Loader from '../pages/physical/uploading/images/loading.svg';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 716px;
  height: 600px;
  margin-top: 5%;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.navy};
  border-radius: 25px;
`;

export const PageTitle = styled.div`
  margin: 20px;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 3px;
`;

export const PageText = styled.div`
  margin: 10px;
  font-size: 17px;
  letter-spacing: normal;
  font-weight: 600;
`;

export const PageDescription = styled.div`
  margin-bottom: 36px;
  opacity: 0.5;
  font-size: 15px;
`;

export const LoaderContainer = styled.div`
  margin: 20px;
`;

export const PageLoader = styled.div`
  height: 46px;
  width: 46px;
  animation: rotation 2s infinite linear;
  background-image: url(${Loader});
`;
