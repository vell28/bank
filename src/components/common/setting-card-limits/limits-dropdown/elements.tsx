import styled from 'styled-components';

export const LimitsTitle = styled.h2`
  margin-bottom: 23px;
  color: ${(props) => props.theme.colors.black};
  font-size: 17px;
  font-weight: 500;
  line-height: 1.18;
  letter-spacing: -0.3px;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0 11px 11px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray6};
  &:last-child {
    border-bottom: none;
  }
`;

export const CardLabelName = styled.span`
  color: ${(props) => props.theme.colors.dark};
  font-size: 15px;
  letter-spacing: -0.4px;
`;

export const AvailableLimitLabelName = styled.span`
  color: ${(props) => props.theme.colors.gray3};
  font-size: 15px;
  letter-spacing: -0.4px;
`;

export const AvailableLimitLabelValue = styled.span`
  color: ${(props) => props.theme.colors.gray3};
  font-size: 15px;
  letter-spacing: -0.4px;
`;

export const LimitItem = styled.div`
  flex-grow: 1;
  ul {
    list-style-type: none;
    margin: 5px 0 0;
    padding: 0;
    li {
      display: flex;
      align-items: center;
      font-size: 15px;
      justify-content: space-between;
    }
    li + li {
      margin-top: 4px;
    }
  }
`;

export const SetLimit = styled<any>('div')`
  cursor: pointer;
  align-self: center;
  padding: 2px 10px;
  i {
    font-size: 10px;
    text-align: center;
    color: ${(props) => (props.isShown ? props.theme.colors.dark : props.theme.colors.gray3)};
  }
`;

export const DropDownListLabel = styled<any>('li')`
  cursor: pointer;
  font-size: 15px;
  margin: auto;
  color: ${(props) => (props.isSelected ? props.theme.colors.blue : props.theme.colors.dark)};
  display: ${(props) => (props.isShown ? '' : 'none')};
  margin: 0px 33px;
  padding: 2px 5px;
  border-radius: 7px;
  &:hover {
    background-color: ${(props) => props.theme.colors.grayHover};
  }
`;

export const DropDownListBox = styled.div`
  text-align: center;
  padding: 0;
  ul {
    list-style-type: none;
    padding: 0;
  }
`;

export const DropDownInput = styled<any>('input')`
  display: ${(props) => (props.isShown ? '' : 'none')};
  max-width: 118px;
  height: 26px;
  background-color: ${(props) => props.theme.colors.grayHover};
  border-radius: 7px;
  border: 0px;
  text-align: center;
  font-size: 15px;
  outline: 0;
  outline-offset: 0;
  margin-left: 25px;
`;

export const Accept = styled<any>('span')`
  display: ${(props) => (props.isShown ? '' : 'none')};
  color: ${(props) => (props.isEnable ? props.theme.colors.blue : props.theme.colors.gray3)};
  cursor: pointer;
  margin-left: 5px;
`;
