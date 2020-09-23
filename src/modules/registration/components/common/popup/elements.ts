import styled from 'styled-components';

export const PopupTitle = styled.h2`
  color: ${(props) => props.theme.colors.black};
  font-size: 17px;
  font-weight: 600;
  margin-top: 43px;
  margin-bottom: 8px;
  letter-spacing: -0.41px;
`;

export const PopupBtn = styled<any>('button')`
  width: 200px;
  height: 30px;
  border-radius: 15px;
  border: solid 1px ${(props) => props.theme.colors.slate};
  font-size: 13px;
  font-weight: 600;
  font-stretch: normal;
  text-align: center;
  color: ${(props) => props.theme.colors.slate};
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    border-color: ${(props) => props.theme.colors.green1};
    color: ${(props) => props.theme.colors.green1};
  }
`;
