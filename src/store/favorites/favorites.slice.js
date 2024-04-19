import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const van = action.payload;
      const index = state.findIndex(item => item._id === van._id);
      if (index !== -1) {
        state.splice(index, 1);
      } else {
        state.push(van);
      }
    },
  },
});

export const { toggleFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
