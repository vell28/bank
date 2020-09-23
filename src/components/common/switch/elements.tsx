import styled from 'styled-components';

export const Slider = styled.span`
  position: relative;
  display: block;
  flex: none;
  padding: 0 1px;
  width: 40px;
  height: 25px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.grayLight};
  border: none;
  cursor: pointer;
  transition: all .3s;
  &::after {
    content: '';
    position: absolute;
    width: 21px;
    height: 21px;
    transition: all .3s;
    box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.16), 0 3px 8px 0 rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    left: 0;
    top: 2px;
    background: ${(props) => props.theme.colors.white};
`;

export const SwitchBox = styled<any>('div')`
  position: relative;
  vertical-align: middle;
  display: flex;
  cursor: pointer;
  width: 100%;
  justify-content: space-between;
  ${(props) =>
    props.isChecked
    && `
    ${Slider}{
      border-color: ${props.theme.colors.green2};
      background-color: ${props.theme.colors.green2};
      &::after {
        transform: translate(18px);
      }
    }
  `};
  ${(props) =>
    props.isDisable
    && props.isChecked
    && `
    ${Slider}{
      cursor: auto;
    }
  `};
`;

export const SwitchContent = styled.div`
  color: ${(props) => `${props.theme.colors.black}`};
  word-break: break-word;
  font-weight: 500;
`;
