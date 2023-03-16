import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const NavLinks = [
  { path: '/', title: 'Home' },
  { path: '/about', title: 'About' },
];

const Navigation = () => {
  return (
    <Header>
      <div className="container">
        <nav>
          <List>
            {NavLinks.map(({ path, title }) => (
              <li key={title}>
                <NavLink to={path}>{title}</NavLink>
              </li>
            ))}
          </List>
        </nav>
      </div>
    </Header>
  );
};

const Header = styled.header`
  background-color: var(--secondary-color-200);
`;

const List = styled.ul`
  display: flex;

  place-content: center;
  gap: 0.6em;

  a {
    display: inline-block;
    padding: 0.4em 0;
    cursor: pointer;
  }

  a.active {
    color: var(--text-color-hover);
    pointer-events: none;
  }

  & > li:hover {
    color: var(--text-color-hover);
  }
`;

export default Navigation;
