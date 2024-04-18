// https://6620ee7d3bf790e070b13fc7.mockapi.io/adverts

import { configureStore } from '@reduxjs/toolkit';
import { favoritesReducer } from './favorites/favorites.slice'; // Исправлено на favoritesReducer

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer, // Исправлено на favoritesReducer и добавлено имя для среза
  },
});
