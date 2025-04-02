import axios from 'axios';
import {API_KEY, BASE_URL} from '../constants/api.endpoints';

export const getCurrentWeather = async (lat: number, lon: number) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw error;
  }
};

export const getNearbyCities = async (lat: number, lon: number) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/find?lat=${lat}&lon=${lon}&cnt=5&appid=${API_KEY}&units=metric`,
    );
    return response.data.list;
  } catch (error) {
    console.error('Error fetching nearby cities:', error);
    throw error;
  }
};
