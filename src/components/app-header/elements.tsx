import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
  padding: 22px 0 12px;
  width: 1220px;
  margin: auto;
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.div`
  img {
    width: 190px;
    height: 38px;
    vertical-align: baseline;
  }
`;

export const HeaderNav = styled.nav`
  margin-bottom: 5px;
`;

export const HeaderMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  display: inline-block;
`;

export const HeaderLngSelector = styled.div`
  margin-bottom: 3px;
  margin-left: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.white};
`;

export const LinkChildren = styled(Link)`
`;
