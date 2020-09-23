import styled from 'styled-components';
import { BtnLink } from '../../common/button/link/elements';
import { AccountBtn } from '../../common/button/account/elements';

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  margin: 72px 0 36px;
`;

export const PageSection = styled.div`
  padding: 0 26px;
  margin: 26px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LinkContainer = styled.div`
  position: absolute;
  bottom: 12px;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
`;

export const Link = styled(BtnLink)`
  align-text: center;
`;

export const PageButton = styled(AccountBtn)`
  width: 45%;
`;
