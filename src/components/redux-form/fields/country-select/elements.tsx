import styled from 'styled-components';

export const AmountBox = styled.div`
  position: relative;
  padding-bottom: 0;
`;

export const AmountTitle = styled.h2`
  margin-bottom: 0;
  text-align: left;
  color: ${(props) => props.theme.colors.white};
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.98px;
`;

export const Error = styled.div`
  color: ${(props) => props.theme.colors.red};
  font-size: 12px;
  position: absolute;
  bottom: -6px;
  white-space: nowrap;
`;

export const AmountInputBox = styled.div`
  position: relative;
`;

export const AmountCurrency = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: ${(props) => props.theme.colors.black};
  font-size: 20px;
  letter-spacing: 2.25px;
  z-index: 1;
`;
