import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://6620ee7d3bf790e070b13fc7.mockapi.io';

export const fetchVans = createAsyncThunk('vans/fetchVans', async () => {
  try {
    const response = await axios.get(`${BASE_URL}/adverts`);
    return response.data;
  } catch (error) {
    throw error;
  }
});
