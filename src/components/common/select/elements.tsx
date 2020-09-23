import styled from 'styled-components';

export const SelectBox = styled.div`
  width: 100%;
  position: relative;
  max-width: 250px;
`;
export const ActiveSelect = styled.div`
  position: relative;
  z-index: 10;
  height: 30px;
  padding: 0 91px;
  border-radius: 25px;
  border: 1px solid #fff;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;

  div {
    color: #fff;
    font-family: AvenirNext, sans-serif;
    font-size: 16px;
    letter-spacing: 0.89px;
    text-transform: lowercase;
  }
`;

export const Icon = styled.span<any>`
  position: absolute;
  width: 9px;
  height: 4px;
  background: url(/img/arrow-select-white.svg) no-repeat;
  background-size: contain;
  top: 11px;
  right: 19px;
  transition: all 0.3s;
  transform: rotate(${({ isShown }) => (isShown ? 180 : 0)}deg);
`;

export const Dropdown = styled<any>('div')`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  padding-top: 30px;
  background: #fff;
  border-radius: 20px 20px 10px 10px;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s;
  ${(props) =>
    props.isShown
    && `
    opacity: 1;
    visibility: visible;
      overflow: visible;
      max-height: 700px;
    `};
`;

export const DropdownItem = styled.div`
  padding: 15px 15px 9px;
  display: block;
  width: 100%;
  color: #000;
  font-size: 16px;
  font-family: inherit;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.green1};
  }
`;
