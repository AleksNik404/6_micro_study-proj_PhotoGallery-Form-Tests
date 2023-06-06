// import reducer, { todoAdded, Todo } from './todosSlice';
import { CardItem } from '../components/Card';
import photoAppReducer, {
  addFormCard,
  closeModal,
  initialState,
  onLoad,
  openModal,
  setToastCardMessage,
  updateQuery,
} from '../features/photoAppSlice';

describe('test photoAppSlice reducer', () => {
  it('should return the initial state', () => {
    expect(photoAppReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle updating query parameter', () => {
    const params = { count: 1, query: '123' };
    const previousState = { ...initialState, params };
    const newTestQuery = 'death';

    const newState = photoAppReducer(previousState, updateQuery(newTestQuery));

    expect(newState.params.query).not.toEqual(params.query);
    expect(newState.params.query).toEqual(newTestQuery);
  });

  it('should handle updating query parameter and setting it to undefined when query is empty', () => {
    const params = { count: 1, query: '123' };
    const previousState = { ...initialState, params };
    const newTestQuery = '';

    const newState = photoAppReducer(previousState, updateQuery(newTestQuery));

    expect(newState.params.query).not.toEqual(params.query);
    expect(newState.params.query).toEqual(undefined);
  });

  it('should update the notification message', () => {
    const toastMessage = 'live';
    const previousState = { ...initialState, toastMessage };
    const newToastMessage = 'success';

    const newState = photoAppReducer(previousState, setToastCardMessage(newToastMessage));

    expect(newState.toastMessage).not.toEqual(toastMessage);
    expect(newState.toastMessage).toEqual(newToastMessage);
  });

  it('should update the modal open state and Load', () => {
    const modal = { ...initialState.modal, isOpen: false, ImageIsLoading: false };
    const previousState = { ...initialState, modal };

    expect(photoAppReducer(previousState, openModal()).modal.isOpen).toEqual(true);
    expect(photoAppReducer(previousState, openModal()).modal.ImageIsLoading).toEqual(true);

    expect(photoAppReducer(previousState, closeModal()).modal.isOpen).toEqual(false);
    expect(photoAppReducer(previousState, onLoad()).modal.ImageIsLoading).toEqual(false);
  });

  it('should handle a card being added to an empty list and a non-empty list', () => {
    const formCards: CardItem[] = [];
    const previousState = { ...initialState, formCards };

    const newCard: CardItem = {
      id: 'test-ID-1',
      image: 'test-url',
      userName: 'time',
      created_at: '27/07/1993',
      imageAspectRatio: [4, 3],
    };

    const newState = photoAppReducer(previousState, addFormCard(newCard));
    expect(newState.formCards).toEqual([newCard]);

    const secondNewCard = { ...newCard, id: 'test-ID-2' };
    expect(photoAppReducer(newState, addFormCard(secondNewCard)).formCards).toEqual([
      newCard,
      secondNewCard,
    ]);
  });
});
