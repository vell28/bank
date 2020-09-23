import styled from 'styled-components';

export const FormLabel = styled<any>('label')`
  display: block;
  margin-bottom: 14px;
  color: ${(props) => props.theme.colors.white};
  ${(props) =>
    props.hasError
    && `
    color: ${props.theme.colors.red};
  `};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: SFProText, sans-serif;
  font-weight: 300;
  opacity: 0.5;
  letter-spacing: 1.07px;
  font-size: 15px;
`;
