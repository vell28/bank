import styled from 'styled-components';

import { DescriptionTitle } from '../operations/steps/elements';
import { NextBtn } from '../common/button/next/elements';

export const TopUpPublicBox = styled.div`
  background: ${(props) => props.theme.colors.darkBlue};
`;

export const TopUpPublicInner = styled.div`
  position: relative;
  display: block;
  width: 430px;
  margin: 0 auto;
  padding-top: 33px;
  padding-bottom: 64px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: normal;
  img {
    width: 67px;
    height: 38px;
  }
`;

export const Line = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  color: ${(props) => props.theme.colors.white};
  span {
    font-weight: bold;
  }
`;

export const EmailBox = styled.div`
  margin: 40px auto 0;
  width: 313px;
  display: block;
  ${DescriptionTitle} {
    color: ${(props) => props.theme.colors.white};
  }
  input {
    background: transparent;
    color: ${(props) => props.theme.colors.white};
    font-size: 17px;
    letter-spacing: 1.28px;
    border-bottom: 1px solid ${(props) => props.theme.colors.white};
  }
`;

export const TopUpPublickBtn = styled(NextBtn)`
  margin: 32px auto 0;
  display: block;
  border: 1px solid ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.white};
`;
