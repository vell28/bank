import styled from 'styled-components';

import UploadLoago from './upload.svg';

export const InputContainer = styled.div`
  width: 100%;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 160px;
  padding: 0 24px;
  border: 1px dashed ${(props) => props.theme.white};
  border-radius: 20px;
  opacity: 0.8;
  outline: none;
  cursor: pointer;
`;

export const DropLogo = styled.div`
  height: 26px;
  width: 26px;
  margin: 10px;
  background-image: url(${UploadLoago});
  background-size: 26px;
`;

export const FileInputLabel = styled.div`
  width: 100%;
  text-align: center;
  font-size: 13px;
`;

export const PeviewImage = styled.img`
  height: 90%;
  width: 70%;
`;

export const ClearInput = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
