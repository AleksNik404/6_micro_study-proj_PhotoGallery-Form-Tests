import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { Main } from '../../styled/smallComponents';
import Header from '../../components/Header';

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <Main>
        <div className="container">
          <ErrorBox>
            <p>Ops... </p>
            <Heading>Page not found</Heading>
            <Link to="/">
              <Button>Go Home</Button>
            </Link>
          </ErrorBox>
        </div>
      </Main>
    </>
  );
};

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`;

const ErrorBox = styled.article`
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;

  min-height: var(--min-height-block);
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: var(--secondary-color-300);
  color: var(--text-color);

  border-radius: var(--border-radius-sm);
  cursor: pointer;

  transition: background-color 0.3s;

  &:hover {
    background-color: var(--secondary-color-200);
  }
`;

export default NotFoundPage;
