import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const van = action.payload;
      const index = state.findIndex(v => v.id === van.id);

      if (index !== -1) {
        // Если уже в избранном, удаляем из списка
        state.splice(index, 1);
      } else {
        // Иначе добавляем в список
        state.push(van);
      }
    },
  },
});

export const { toggleFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
