import styled from 'styled-components';

export const AccountBlock = styled.div`
  margin-top: 32px;
  margin-bottom: 26px;
  &:first-child {
    margin-top: 0 !important;
  }
`;

export const AccountTabs = styled.div`
  margin: 0 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SliderBox = styled.div`
  position: relative;
  margin-bottom: 30px;
  min-width: 485px;
  left: -25px;
`;

export const DetailBox = styled<any>('div')`
  height: ${(props) => (props.isShown ? '180px' : 'auto')};
`;

export const CardsBlock = styled(AccountBlock)`
  h2,
  .h2 {
    margin-bottom: 0;
  }
`;
