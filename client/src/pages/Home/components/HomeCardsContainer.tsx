import Card, { CardItem } from '../../../components/Card';
import { Grid } from '../../../styled/Grid';
import { Modal } from '../Modal.tsx/Modal';
import { useLazyGetPhotoByIDQuery } from '../../../features/apiSlice';
import { useAppDispatch } from '../../../app/hooks';
import { closeModal, onLoad, openModal } from '../../../features/photoAppSlice';
import { TEST_DATA_CARD } from '../../../test/test.constants';

export interface Cards {
  cards: CardItem[];
}

const HomeCardsContainer = ({ cards }: Cards) => {
  const dispatch = useAppDispatch();

  const [fetchSearch, { data, isFetching }] = useLazyGetPhotoByIDQuery();

  const handlerClick = (id: string) => {
    fetchSearch({ id });
    dispatch(openModal());
  };

  return (
    <Grid type="flex" data-testid="grid">
      {cards.map((oneCardData) => (
        <div
          key={oneCardData.id}
          onClick={() => handlerClick(oneCardData.id)}
          data-testid={TEST_DATA_CARD}
        >
          <Card cardData={oneCardData} />
        </div>
      ))}

      <Modal
        data={data}
        loading={isFetching}
        onClose={() => dispatch(closeModal())}
        onLoad={() => dispatch(onLoad())}
      />
    </Grid>
  );
};

export default HomeCardsContainer;
