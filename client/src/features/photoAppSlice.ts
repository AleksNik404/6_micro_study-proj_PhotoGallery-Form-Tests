import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { API_COUNT_PHOTOS } from '../utils/constants';
import { CardItem } from '../components/Card';

type HomeSearchState = {
  params: {
    count: number;
    query: string | undefined;
  };

  modal: {
    isOpen: boolean;
    ImageIsLoading: boolean;
  };

  formCards: CardItem[];
  toastMessage: string;
};

export const initialState: HomeSearchState = {
  params: {
    count: API_COUNT_PHOTOS,
    query: undefined,
  },

  modal: {
    isOpen: false,
    ImageIsLoading: false,
  },

  formCards: [],
  toastMessage: '',
};

const photoAppSlice = createSlice({
  name: 'homeSearch',
  initialState,
  reducers: {
    updateQuery: (state, action: PayloadAction<string>) => {
      state.params.query = action.payload || undefined;
    },

    setToastCardMessage: (state, action: PayloadAction<string>) => {
      state.toastMessage = action.payload;
    },

    openModal: (state) => {
      state.modal.isOpen = true;
      state.modal.ImageIsLoading = true;
    },

    closeModal: (state) => {
      state.modal.isOpen = false;
    },

    onLoad: (state) => {
      state.modal.ImageIsLoading = false;
    },

    addFormCard: (state, action: PayloadAction<CardItem>) => {
      state.formCards.push(action.payload);
    },
  },
});

export const { updateQuery, openModal, closeModal, onLoad, addFormCard, setToastCardMessage } =
  photoAppSlice.actions;

export default photoAppSlice.reducer;
