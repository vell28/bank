import styled from 'styled-components';

export const FormGroup = styled<any>('div')`
  position: relative;
  width: 100%;
  margin-bottom: 26px;

  ${(props) =>
    props.hasError
    && `
    input {
      color: ${props.theme.colors.red};
    }
  `};
`;

export const FormGroupLine = styled<any>('div')`
  display: flex;
  & > * + * {
    margin-left: 20px;
  }
`;

export const LineGroup = styled<any>('div')`
  ${({ isDisabled }) =>
    isDisabled
    && `
    opacity: 0.6;
    pointer-events: none;
  `}
`;

export const Row = styled<any>('div')`
  display: flex;
  align-items: center;
`;

export const Column = styled<any>('div')`
  max-width: 60%;
  width: 100%;
  display: flex;
  position: relative;
`;

export const ErrorColumn = styled<any>(Column)`
  color: ${(props) => props.theme.colors.red};
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  ${(props) =>
    props.group
    && `
    padding-top: 36px;
  `}
  padding-left: 20px;
  margin-left: 0 !important;
  max-width: 40%;
`;
