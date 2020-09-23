import styled, { css } from 'styled-components';
import { ifProp, switchProp } from 'styled-tools';

import ok from './ok.svg';
import document from './document.svg';
import selfie from './selfie.svg';

export const Container = styled.div<any>`
  width: 200px;
  height: 230px;
  border-radius: 20px;
  border: dashed 1px ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 0 24px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  ${ifProp(
    'disabled',
    css`
      opacity: 0.3;
      pointer-events: none;
    `,
  )}

  ${switchProp('icon', {
    document: css`
      span {
        background-image: url(${document});
      }
    `,
    selfie: css`
      span {
        background-image: url(${selfie});
      }
    `,
  })}

  ${ifProp(
    'isFilled',
    css`
      border: none;
      background-color: rgba(147, 215, 126, 0.1);

      span {
        background-image: url(${ok});
      }
    `,
  )}
`;

export const Text = styled.p<any>`
  font-size: 13px;
  font-weight: 300;
  height: 55%;
  line-height: normal;
  letter-spacing: 0.93px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding-top: 10%;
`;

export const Icon = styled.span<any>`
  height: 45%;
  font-size: 13px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.93px;
  color: ${({ theme }) => theme.colors.white};
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 26px;
`;
