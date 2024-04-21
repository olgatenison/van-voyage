import { createSlice } from '@reduxjs/toolkit';
import { fetchVans } from './creator';

const initialState = {
  loading: false,
  error: null,
  vans: [],
};

export const vansSlice = createSlice({
  name: 'vans',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchVans.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVans.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.vans = action.payload;
      })
      .addCase(fetchVans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
