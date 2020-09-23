import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 15px 57px 24px;
`;

export const CardOwnerDetailsContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 13px;
  margin-top: 37px;
  padding: 27px 20px 16px;
  border: solid 1px ${(props) => props.theme.colors.blue};
  border-radius: 7px;
`;

export const FieldLabel = styled.label`
  color: ${(props) => props.theme.colors.black};
  font-size: 15px;
  letter-spacing: -0.36px;
  margin-bottom: 6px;
`;

export const Delimiter = styled.div`
  width: 100%;
  height: 3px;
  margin: 5px 0 30px;
  border-top: 1px solid ${(props) => props.theme.colors.gray10};
  &:last-child {
    margin-bottom: 0;
  }
`;
