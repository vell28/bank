import styled from 'styled-components';

export const FieldLabel = styled.label<any>`
  color: ${(props) => props.theme.colors.black};
  font-size: 15px;
  font-weight: normal;
  letter-spacing: -0.36px;
  margin-bottom: 6px;
  position: relative;
  opacity: ${({ isDisabled }) => isDisabled ? 0.7 : 1};

  & > div {
    position: absolute;
    display: none;
    width: 18px;
    height: 18px;
    background: ${(props) => props.theme.colors.green};
    top: 9px;
    left: 9px;
    border-radius: 50%;
  };

  input {
    visibility: hidden;
  }

  span {
    padding-left: 10px;
  }

  ${(props) => props.isCustom && `
    &:after {
      content: ' ';
      width: 28px;
      height: 28px;
      background: transparent;
      position: absolute;
      border-radius: 50%;
      border: solid 0.5px ${props.theme.colors.gray10};
      left: 4px;
      top: 4px;
    }

    input: checked + div {
      display: block;
    }
  `}
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 12px;
`;

export const Delimiter = styled.div`
  width: 100%;
  height: 0;
  border-top: 1px solid ${(props) => props.theme.colors.gray10};
`;
