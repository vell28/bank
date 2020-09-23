import styled from 'styled-components';

export const CardBox = styled.div`
  padding: 21px 22px 16px;
  border: 1px solid #dfe1e4;
  box-shadow: 0 3px 7px 0 hsla(0, 0%, 70%, 0.26);
  border-radius: 10px;
  width: 100%;
  max-width: 350px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  margin: 12px 0 0 0;
  color: ${(props) => props.theme.colors.black};
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.98px;
`;

export const CardLogo = styled.div`
  width: 54px;
  margin: 7px 0 0 0px;

  img {
    height: 42px;
    object-fit: cover;
  }
`;

export const CardBody = styled.form`
  display: block;
`;
export const CardRow = styled.div`
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CardColumns = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardColumn = styled<any>('div')`
  display: flex;
  align-items: center;
  width: ${(props) => (props.isFullSize ? '100%' : '43%')};
`;

export const CardLabel = styled.label`
  margin-right: 5px;
  color: ${(props) => props.theme.colors.black};
  font-size: 9px;
  letter-spacing: .68px;
  text-transform: uppercase;
}
`;
