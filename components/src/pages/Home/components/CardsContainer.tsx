import styled from '@emotion/styled';

import Card, { CardItem } from './Card';

export interface Cards {
  cards: CardItem[];
}

const CardsContainer = ({ cards }: Cards) => {
  return (
    <Grid>
      {cards.map((oneCardData) => {
        return <Card key={oneCardData.id} cardData={oneCardData} />;
      })}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));

  justify-items: center;
  row-gap: 3rem;
  column-gap: 1rem;
`;

export default CardsContainer;
