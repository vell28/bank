import styled from 'styled-components';

export const CardLimitsBox = styled.div`
  margin-bottom: 13px;
  padding-top: 26px;
  padding-bottom: 0;
  border-radius: 7px;
  border: 1px solid ${(props) => props.theme.colors.borderLight};
`;

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

export const CardFieldLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.dark};
  font-size: 15px;
  letter-spacing: -0.4px;
  cursor: pointer;
`;

export const CardLabelName = styled<any>('span')`
  color: ${(props) => (props.isEnabled ? props.theme.colors.dark : props.theme.colors.gray3)};
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

export const SetLimit = styled.div`
  cursor: pointer;
  align-self: center;
  padding: 2px 10px;
  i {
    font-size: 10px;
    text-align: center;
    color: ${(props) => props.theme.colors.gray3};
  }
`;

export const SwitchBox = styled.div`
  width: 40px;
  position: relative;
  margin: 0 10px 0 10px;
`;

export const TimerLable = styled<any>('span')`
  color: ${(props) => props.theme.colors.dark};
  font-size: 13px;
  letter-spacing: -0.4px;
  line-height: 25px;
  margin-left: auto;
  display: ${(props) => (props.isShown ? '' : 'none')};
`;
