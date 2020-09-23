import styled from 'styled-components';

import { baseBtnCss, outlineBtnCss, dropdownBtnCss } from '../elements';

export const DropdownBtn = styled<any>('button')`
  ${baseBtnCss};
  ${outlineBtnCss} ${dropdownBtnCss}
    width: 100%;
  &:after {
    transform: rotate(0deg);
    transition: transform 0.6s;
  }

  ${(props: any) =>
    props['data-active']
    && `
    border: 1px solid ${props.theme.colors.blue};
    color: ${props.theme.colors.blue};

    &:after {
      transform: rotate(180deg);
    `};
`;
