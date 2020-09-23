import styled from 'styled-components';

export const Input = styled<any>('input')`
  font-weight: ${(props) => (props.bold ? 600 : 400)};
  color: ${(props) => props.theme.colors.black};
  font-size: 17px;
  letter-spacing: 1.13px;
  border-radius: 0;
  border: none;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(161, 182, 178, 0.38);
  outline: none;
  ${(props) =>
    props.hasError
    && `
     border-bottom: 1px solid ${props.theme.colors.red}70 !important;
     color: ${props.theme.colors.red};
  `};
  width: 100%;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.black};
  font-size: 13px;
  letter-spacing: 1px;
  padding-bottom: 4px;
  display: block;
`;

export const FormGroup = styled<any>('div')`
  position: relative;
  width: 100%;
  padding-bottom: 21px;
  ${(props) =>
    props.hasError
    && `
    input{
      color: ${props.theme.colors.red};
    }
  `};
`;

export const LabelLine = styled.div`
  display: flex;
  justify-content: space-between;
`;
