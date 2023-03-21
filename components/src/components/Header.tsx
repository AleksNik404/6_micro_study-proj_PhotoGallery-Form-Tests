import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import { NavLinks } from '../data/LinksNav';

interface HeaderProps {
  namePage?: string;
}

const Header = ({ namePage }: HeaderProps) => {
  return (
    <HeaderStyled>
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
      <Heading>{namePage}</Heading>
    </HeaderStyled>
  );
};

export default Header;

const Heading = styled.h1`
  text-align: center;
`;

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
