import axios from 'axios';
const BASE_URL = 'https://6620ee7d3bf790e070b13fc7.mockapi.io';

export const fetchAllVans = async () => {
  try {
    console.log('Fetching vans...');
    const response = await axios.get(`${BASE_URL}/adverts`);
    if (response.status !== 200) {
      throw new Error('Failed to fetch adverts');
    }
    console.log('Vans fetched successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching adverts:', error);
    throw error;
  }
};

// Вызываем функцию fetchAllVans и сохраняем результат в переменной vans
// const vans = await fetchAllVans();
// console.log('Vans:', vans);
// Выводим полученные данные в консоль
