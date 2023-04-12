import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { API_COUNT_PHOTOS } from '../../utils/constants';

type HomeSearchState = {
  params: {
    count: number;
    query: string | undefined;
  };

  modal: {
    isOpen: boolean;
    ImageIsLoading: boolean;
  };
};

const initialState: HomeSearchState = {
  params: {
    count: API_COUNT_PHOTOS,
    query: undefined,
  },

  modal: {
    isOpen: false,
    ImageIsLoading: false,
  },
};

const homeSearchSlice = createSlice({
  name: 'homeSearch',
  initialState,
  reducers: {
    updateQuery: (state, action: PayloadAction<string>) => {
      state.params.query = action.payload || undefined;
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
  },
});

export const { updateQuery, openModal, closeModal, onLoad } = homeSearchSlice.actions;

export default homeSearchSlice.reducer;
