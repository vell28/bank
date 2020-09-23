import styled from 'styled-components';

export const MainModalBox = styled<any>('section')`
  position: relative;
  border-radius: 25px;
  background: ${(props) => props.theme.colors.white};
  padding: 39px 27px 27px 27px;
  min-height: 100%;
  display: flex;
  height: auto;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.3s ease-in;
  ${(props) =>
    !props.isShown
    && `
    display: none;
    width: 0;
    height: 0;
    overflow: hidden;
  `};

  // TODO: It's bad solution to hide next main content(for relative modal), improve it!!!!
  ${(props) =>
    props.isShown
    && `
  & + section {
    position: absolute;
    pointer-events: none;
    top: 0;
    display: none;
  }
`};
`;

export const MainModalCloseBox = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 2px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
