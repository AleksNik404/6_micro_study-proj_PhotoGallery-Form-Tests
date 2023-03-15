import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Navigation>
      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <li>
          <Link to="/about">About</Link>
        </li>
      </List>
    </Navigation>
  );
};

const Navigation = styled.nav``;

const List = styled.ul`
  display: flex;
  flex-direction: row;
`;
const ListItem = styled.li``;

export default Nav;
