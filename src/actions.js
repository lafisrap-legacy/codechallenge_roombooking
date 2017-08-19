import axios from 'axios';

export const API_BASE_URL = 'https://challenges.1aim.com/roombooking';

// Fetch images from yaml file
export const FETCH_ROOMS = 'FETCH_ROOMS';
export function fetchRooms(date) {
  return {
    type: FETCH_ROOMS,
    payload: axios.post(`${API_BASE_URL}/getrooms`, { date }),
  };
}
