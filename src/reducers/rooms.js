import moment from 'moment';
import { FETCH_ROOMS, SET_DATE } from '../actions';

//----------------------------------------------------
// Centralized application state
// For more information visit http://redux.js.org/
const initialState = {
  //----------------------------------------------------
  // Rooms, with info of a specific day
  rooms: [],
  //----------------------------------------------------
  // Currently selected date
  date: moment().unix(),
};

const Rooms = (state = initialState, action) => {
  const data = (action.payload && action.payload.data) || null;

  switch (action.type) {

    case FETCH_ROOMS: {
      const rooms = data.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase());

      return { ...state, rooms };
    }

    case SET_DATE: {
      const date = action.payload;

      return { ...state, date };
    }

    default:
      return state;
  }
};

export default Rooms;
