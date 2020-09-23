import styled from 'styled-components';

export const FormGroup = styled<any>('div')`
  position: relative;
  width: 100%;
  padding-bottom: 21px;

  input {
    color: ${({ theme, hasError }) => hasError && theme.colors.red} !important;
    border-color: ${({ theme, hasError }) => hasError && theme.colors.red} !important;
  }
`;

export const Error = styled<any>('div')`
  font-size: 12px;
  white-space: nowrap;
  position: absolute;
  bottom: 0;
  color: ${(props) => props.theme.colors.red};
  width: 100%;
  text-align: center;
`;

export const BothSideLine = styled.div`
  margin: 0 -27px;
  position: relative;
  padding: 10px 16px;
`;

export const BottomSideLine = styled.div`
  position: relative;
  padding: 10px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray6};
`;
