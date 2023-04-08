import Card, { CardItem } from '../../../components/Card';
import { Grid } from '../../../styled/Grid';

export interface Cards {
  cards: CardItem[];
}

const FormCardsContainer = ({ cards }: Cards) => {
  return (
    <Grid type="flex">
      {cards.map((oneCardData) => {
        return <Card key={oneCardData.id} cardData={oneCardData} />;
      })}
    </Grid>
  );
};

export default FormCardsContainer;
