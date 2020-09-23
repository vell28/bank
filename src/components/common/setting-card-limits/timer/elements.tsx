import styled from 'styled-components';

export const TimerLable = styled<any>('span')`
  color: ${(props) => (props.isAtive ? props.theme.colors.dark : props.theme.colors.gray3)};
  font-size: 13px;
  letter-spacing: -0.4px;
  line-height: 25px;
  margin-left: auto;
`;
