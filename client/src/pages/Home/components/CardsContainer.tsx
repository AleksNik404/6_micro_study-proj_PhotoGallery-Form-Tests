import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Card, { CardItem } from './Card';

export interface Cards {
  cards: CardItem[];
}

const CardsContainer = ({ cards }: Cards) => {
  return (
    <Grid type="flex">
      {cards.map((oneCardData) => {
        return <Card key={oneCardData.id} cardData={oneCardData} />;
      })}
    </Grid>
  );
};

const Grid = styled.div<{ type: 'flex' | 'grid' }>`
  ${({ type }) => {
    return type === 'flex'
      ? css`
          display: flex;
          justify-content: center;
          flex-wrap: wrap;

          & > * {
            max-width: 28rem;
            flex: 1 1 22rem;
          }
        `
      : css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));

          & > * {
            max-width: 28rem;
            width: 100%;
          }
        `;
  }}

  justify-items: center;
  gap: 3rem 1.6rem;
`;

export default CardsContainer;
