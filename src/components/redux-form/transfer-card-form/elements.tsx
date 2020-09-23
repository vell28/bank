import styled from 'styled-components';

export const NextBtnBox = styled.div`
  text-align: center;
  margin-top: 40px;
`;

export const CommentTitle = styled.div`
  margin-top: 31px;
  display: block;
  margin-bottom: 7px;
  font-size: 13px;
  color: ${(props) => props.theme.colors.black};
  letter-spacing: 1px;
  span {
    opacity: 0.3;
    padding-left: 2px;
  }
`;

export const DescriptionInput = styled.div`
  height: 52px;

  input {
    border-bottom: 1px solid rgba(161, 182, 178, 0.38);
    height: 35px;
    font-size: 17px;
    letter-spacing: 1.28px;
    line-height: 35px;
  }
`;
