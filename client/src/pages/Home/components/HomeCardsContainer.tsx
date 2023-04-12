import Card, { CardItem } from '../../../components/Card';
import { Grid } from '../../../styled/Grid';
import { Modal } from '../Modal.tsx/Modal';
import { useLazyGetPhotoByIDQuery } from '../../../features/apiSlice';
import { useAppDispatch } from '../../../app/hooks';
import { closeModal, onLoad, openModal } from '../../../features/photoAppSlice';

export interface Cards {
  cards: CardItem[];
}

const HomeCardsContainer = ({ cards }: Cards) => {
  const dispatch = useAppDispatch();

  const [fetchSearch, { data, isFetching }] = useLazyGetPhotoByIDQuery();

  return (
    <Grid type="flex">
      {cards.map((oneCardData) => (
        <div
          key={oneCardData.id}
          onClick={() => {
            fetchSearch({ id: oneCardData.id });
            dispatch(openModal());
          }}
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
