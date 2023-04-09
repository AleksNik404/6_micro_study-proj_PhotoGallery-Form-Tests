import styled from '@emotion/styled';
import { GiDeathNote } from 'react-icons/gi';

import Header from '../../components/Header';
import { Main } from '../../styled/smallComponents';

const About = () => {
  return (
    <>
      <Header namePage="About us Page" />
      <Main>
        <TextBlock className="container">
          <Heading>
            <GiDeathNote />
          </Heading>
          <p>This page is empty</p>
        </TextBlock>
      </Main>
    </>
  );
};

const TextBlock = styled.section`
  display: flex;
  flex-direction: column;

  place-items: center;
  place-content: center;

  min-height: var(--min-height-block);
`;

const Heading = styled.h1`
  text-align: center;
`;

export default About;
