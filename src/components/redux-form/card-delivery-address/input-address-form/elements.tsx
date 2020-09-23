import styled from 'styled-components';

export const Line = styled.div`
  position: relative;
  margin-top: 0;
  color: ${(props) => props.theme.colors.black};
`;

export const SelectLine = styled(Line)`
  input {
    cursor: pointer !important;
    background: url(/img/arrow-select-white.svg) no-repeat center right 18px;
    color: ${(props) => props.theme.colors.black};
  }
`;

export const CountryBox = styled.div`
  margin: 0 -17px;
  color: ${(props) => props.theme.colors.black};
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

export const CountryLabel = styled.label`
  font-size: 13px;
  color: ${(props) => props.theme.colors.black};
`;
