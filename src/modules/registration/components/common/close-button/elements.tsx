import styled from 'styled-components';

import { Button as BaseButton } from '../button/elements';

export const Button = styled(BaseButton)`
  min-width: 100px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  font-size: 13px;
`;
