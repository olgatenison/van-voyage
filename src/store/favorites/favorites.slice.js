import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const van = action.payload;
      // Проверяем, есть ли уже в избранном
      const isExist = state.some(v => v.id === van.id);
      if (isExist) {
        // Если есть, убираем из избранного
        return state.filter(v => v.id !== van.id);
      } else {
        // Иначе, добавляем в избранное
        return [...state, van];
      }
    },
  },
});

export const { toggleFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
