import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 15px 57px 24px;
`;

export const TypeRadiogroupContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 13px;
  margin-top: 37px;
  border: solid 1px ${(props) => props.theme.colors.gray10};
  border-radius: 7px;

  label {
    margin-bottom: 23px;
  }

  label:last-child {
    margin-bottom: 11px;
  }
`;

export const ListTitle = styled.h1`
  margin: 27px 21px;
  color: ${(props) => props.theme.colors.black};
  font-size: 17px;
  font-weight: 500;
  font-family: Avenir, sans-serif;
  line-height: 1.18;
  letter-spacing: -0.27px;
`;
