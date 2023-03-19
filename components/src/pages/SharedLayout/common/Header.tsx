import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const NavLinks = [
  { path: '/', title: 'Home', name: 'Home Page' },
  { path: '/about', title: 'About', name: 'About Us Page' },
];

const Header = () => {
  return (
    <HeaderStyled>
      <div className="container">
        <nav>
          <List>
            {NavLinks.map(({ path, title, name }) => (
              <li key={title}>
                <NavLink to={path} state={name}>
                  {title}
                </NavLink>
              </li>
            ))}
          </List>
        </nav>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background-color: var(--secondary-color-200);

  margin-bottom: 2rem;
  padding: 0.4rem 0;
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

export default Header;
