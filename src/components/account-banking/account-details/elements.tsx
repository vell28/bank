import styled from 'styled-components';

import { ActionBtn } from '../../common/button/action/elements';

export const AccountDetailBox = styled.div`
  position: relative;
  padding: 0 24px;
  font-family: AvenirNext;
  letter-spacing: 1.14px;
`;

export const BankId = styled.div`
  letter-spacing: 1.14px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.black};
  margin-top: 10px;
`;

export const BankDetail = styled.div`
  margin: 17px 0 15px;
  display: flex;
`;

export const BankDetailBox = styled.div`
  width: 50%;
  &:last-child {
    margin-left: 40px;
  }
`;

export const FieldTitle = styled.div`
  font-size: 14px;
  letter-spacing: -0.09px;
  color: ${(props) => props.theme.colors.gray3};
`;

export const FieldValue = styled(FieldTitle)`
  color: ${(props) => props.theme.colors.black};
`;

export const ActionBox = styled.div`
  margin: 0 -24px 0 -24px;
  padding: 12px 24px 0 24px;
  border-top: 1px solid ${(props) => props.theme.colors.gray4};
  display: flex;
  justify-content: center;
`;

export const DetailActionBtn = styled(ActionBtn)`
  margin: 0 15px;
`;
