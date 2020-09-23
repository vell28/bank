import styled from 'styled-components';

export const TwoSideBox = styled.div`
  position: relative;
  width: 100%;
`;

export const CardRow = styled.div`
  margin-bottom: 13px;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }
  .error-field {
    background: ${(props) => props.theme.colors.white};
  }
`;

export const CardBox = styled.div`
  position: relative;
  padding: 24px 25px 18px 22px;
  border-radius: 10px;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.5);
  border: solid 1px #dfe1e4;
  background: ${(props) => props.theme.colors.white};
  width: 327px;
  height: 189px;
  z-index: 1;
`;

export const SecondCard = styled(CardBox)`
  position: absolute;
  right: 0;
  top: 19px;
  width: 262px;
  height: 151px;
  z-index: 0;
  padding: 24px 0 22px 0;
  ${CardRow} {
    width: 65px;
    position: absolute;
    right: 19px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const CardTitle = styled.div`
  color: ${(props) => props.theme.colors.black};
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.98px;
  margin-bottom: 2px;
`;

export const CardLogo = styled.div`
  width: 54px;
  margin: 7px 0 0 0px;
`;

export const CardBody = styled.form`
  display: block;
`;

export const CardColumns = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardColumn = styled<any>('div')`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
`;

export const CardLabel = styled.label`
  color: #354d65;
  font-size: 8px;
  letter-spacing: normal;
  text-transform: uppercase;
  font-weight: 600;
  position: absolute;
  top: 0;
}
`;

export const CardHolderColumn = styled(CardColumn)`
  input {
    font-size: 10px;
    &::-webkit-input-placeholder {
      color: ${({ theme }) => theme.colors.gray};
      font-size: 17px;
      text-transform: none;
    }
    &:-ms-input-placeholder {
      color: ${({ theme }) => theme.colors.gray};
      font-size: 17px;
      text-transform: none;
    }
    &::-ms-input-placeholder {
      color: ${({ theme }) => theme.colors.gray};
      font-size: 17px;
      text-transform: none;
    }
    &::placeholder {
      color: ${({ theme }) => theme.colors.gray};
      font-size: 17px;
      text-transform: none;
    }
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 33px;
  background-color: rgba(53, 77, 101, 0.12);
  margin-bottom: 10px;
`;
