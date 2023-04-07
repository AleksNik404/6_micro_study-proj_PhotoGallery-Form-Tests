import { CardItem } from './components/Card';

export type State = {
  data: CardItem[];
  loading: boolean;
  error: boolean;

  submitValue: string;
};

export type Action =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: CardItem[] }
  | { type: 'FETCH_ERROR' }
  | { type: 'ADD_SEARCH_VALUE'; payload: string };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: true };
    case 'ADD_SEARCH_VALUE':
      return { ...state, submitValue: action.payload };
    default:
      return state;
  }
};
