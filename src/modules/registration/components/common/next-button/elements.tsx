import styled from 'styled-components';

import WhiteArrowIcon from './arrow-white.svg';
import GreenArrowIcon from './arrow-green.svg';

import { Button as CommonButton } from '../button/elements';

export const Button = styled(CommonButton)`
  position: relative;
  background-repeat: no-repeat;
  background-position: left 10px center;
  ${(props) =>
    props.success
    && `
    color: ${props.theme.colors.asparagus};
    border-color: ${props.theme.colors.asparagus};
  `}
  ${(props) =>
    props.arrow
    && `
    background-image: url(${props.success ? GreenArrowIcon : WhiteArrowIcon});
  `}
`;
