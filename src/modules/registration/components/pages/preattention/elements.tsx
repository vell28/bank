import styled from 'styled-components';

export const LogoBox = styled.div`
  margin-top: -14px;
  margin-bottom: 64px;
  img {
    width: 94px;
  }
`;

export const List = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.4;
  font-size: 15px;
`;

export const ListItem = styled.li`
  line-height: 1.4;
  font-size: 15px;

  & + * {
    margin-top: 16px;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 0;
`;

export const RegisterLater = styled.div`
  margin-top: 30px;
  opacity: 0.5;
  font-size: 15px;
  font-weight: 600;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.white};
`;

export const Asterisk = styled.span`
  color: ${(props) => props.theme.colors.persimmon};
`;

export const LearnMore = styled.span`
  text-decoration: underline;
  color: ${(props) => props.theme.colors.malibu};
`;
