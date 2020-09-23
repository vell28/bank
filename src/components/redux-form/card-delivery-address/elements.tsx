import styled from 'styled-components';

import { NextBtn } from '../../common/button/next/elements';

export const NextBtnBox = styled.div`
  text-align: center;
  margin-bottom: 13px;
  margin-top: 37px;
`;

export const DeliveryAddressNextBtn = styled(NextBtn)`
  color: ${(props) => props.theme.colors.blue};
  border: 1px solid ${(props) => props.theme.colors.gray3};
  background-color: ${(props) => props.theme.colors.white};
  width: 100px;
  height: 100px;
  &:hover {
    background: none;
    color: ${(props) => props.theme.colors.blue};
  }
`;

export const CardAddressContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 13px;
  margin-top: 37px;
  padding: 27px 20px 16px;
  border: solid 1px ${(props) => props.theme.colors.blue};
  border-radius: 7px;
`;

export const Delimiter = styled.div`
  width: 100%;
  height: 3px;
  margin: 5px 0 30px;
  border-top: 1px solid ${(props) => props.theme.colors.gray10};
  &:last-child {
    margin-bottom: 0;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 15px 57px 24px;
`;
