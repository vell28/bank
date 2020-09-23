import styled from 'styled-components';

import { Input } from '../text-input/elements';
import ArrowIcon from './arrow.svg';

export const SelectyInput = styled(Input)`
  background-image: url(${ArrowIcon});
  background-repeat: no-repeat;
  background-position: right 10px center;
  cursor: pointer;
  border-radius: 20px;
`;
