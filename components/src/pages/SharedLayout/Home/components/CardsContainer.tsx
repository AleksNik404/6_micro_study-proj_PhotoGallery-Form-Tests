import styled from '@emotion/styled';
import React from 'react';
import { GameCard } from '../../../../assets/types';
import Card from './Card';

export interface Cards {
  data: GameCard[];
}

const CardsContainer = ({ data = [] }: Cards) => {
  if (!data.length) return null;

  return (
    <Container>
      {data.map((oneCardData) => (
        <Card key={oneCardData.id} oneCardData={oneCardData} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));

  justify-items: center;
  justify-content: center;
  row-gap: 3rem;
  column-gap: 1rem;
`;

export default CardsContainer;
