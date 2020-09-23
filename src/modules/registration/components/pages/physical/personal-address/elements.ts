import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { Textarea } from '../../../common/textarea/elements';
import ok from './Path.svg';

export const Ok = styled.span<any>`
  background-image: url(${ok});
  width: 62.7px;
  height: 45.7px;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  right: 12px;
  top: 0;
  display: none;

  ${ifProp(
    'isFullAddress',
    css`
      display: block;
    `,
  )}
`;

export const DeliveryTextarea = styled(Textarea)<any>`
  padding: 32px 26px 0;
`;
