import axios from 'axios';

export const API_BASE_URL = 'https://challenges.1aim.com/roombooking';

// Fetch rooms from API
export const FETCH_ROOMS = 'FETCH_ROOMS';
export function fetchRooms(date) {
  return {
    type: FETCH_ROOMS,
    payload: axios.post(`${API_BASE_URL}/getrooms`, { date }),
  };
}

// Set current date
export const SET_DATE = 'SET_DATE';
export function setDate(date) {
  return {
    type: SET_DATE,
    payload: date,
  };
}
