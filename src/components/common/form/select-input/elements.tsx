import styled from 'styled-components';

export const Select = styled<any>('select')`
  height: 22px;
  line-height: 22px;
  font-weight: ${(props) => (props.bold && props.value ? 600 : 400)};
  color: ${(props) => `${props.theme.colors.black}${props.value ? '' : '20'}`};
  font-size: 17px;
  letter-spacing: 1.13px;
  border: none;
  outline: none;
  width: 100%;
  background: none;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
`;

export const SelectLine = styled<any>('div')`
  border-bottom: 1px solid rgba(161, 182, 178, 0.38);
  ${(props) =>
    props.hasError
    && `
     border-bottom: 1px solid ${props.theme.colors.red}70 !important;
     option {
          color: ${props.theme.colors.red} !important;
     }
  `};
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.black};
  font-size: 13px;
  padding-bottom: 4px;
  letter-spacing: 1px;
`;

export const FormGroup = styled<any>('div')`
  position: relative;
  width: 100%;
  padding-bottom: 21px;
`;

export const LabelLine = styled.div`
  display: flex;
  justify-content: space-between;
`;
