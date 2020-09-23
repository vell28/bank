import styled from 'styled-components';

export const FileWrap = styled.div<any>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  & > div {
    width: 200px;
  }
  & > div > div {
    height: 230px;
  }
`;

export const Confirmation = styled.div<any>`
  margin-top: 14px;

  & > div {
    color: ${({ theme }) => theme.colors.feijoa};
  }
`;

export const ListWrap = styled.ul<any>`
  margin-top: 14px;
  padding: 0;
`;

export const List = styled.li<any>`
  list-style-type: none;
  margin-bottom: 10px;

  &::before {
    content: '•';
    color: ${({ theme }) => theme.colors.feijoa};
    display: inline-block;
    width: 10px;
    margin-left: 0;
    margin-right: 10px;
  }
`;
