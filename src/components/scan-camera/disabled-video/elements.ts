import styled from 'styled-components';

import { CardBox, CardTitle } from '../../card/elements';

export const Container = styled<any>(CardBox)`
  height: 189px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 21px 0 28px;
`;

export const Title = styled(CardTitle)`
  margin: 0;
  font-weight: normal;
  max-width: 69%;
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;
