import styled from '@emotion/styled';

import Card from './Card';
import { GameCard } from '../../../types/types';

export interface Cards {
  data: GameCard[];
}

const CardsContainer = ({ data }: Cards) => {
  return (
    <Container>
      {data.map((oneCardData) => {
        return <Card key={oneCardData.id} data={oneCardData} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));

  justify-items: center;
  row-gap: 3rem;
  column-gap: 1rem;
`;

export default CardsContainer;
