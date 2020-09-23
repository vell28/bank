import styled from 'styled-components';

export const LngSelector = styled.div`
  width: auto;
  position: relative;
  cursor: pointer;
`;

export const ActiveLng = styled.div<any>`
  position: relative;
  text-transform: uppercase;
  display: flex;
  align-items: flex-end;
  line-height: 1;
  margin-right: 10px;

  i {
    position: absolute;
    font-size: 10px;
    top: 1px;
    right: -22px;
    transition: all 0.3s;
    transform: rotate(${({ isShown }) => (isShown ? 180 : 0)}deg);
  }
`;

export const SelectBox = styled<any>('div')`
  position: absolute;
  top: 15px;
  display: ${(props: any) => (props.isShown ? 'flex' : 'none')};

  span {
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: underline;
    padding-right: 5px;
    &:hover,
    &:focus,
    &:active {
      opacity: 0.5;
      text-decoration: none;
    }
  }
`;
