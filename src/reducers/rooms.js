import { FETCH_ROOMS } from '../actions';

//----------------------------------------------------
// Centralized application state
// For more information visit http://redux.js.org/
const initialState = {
  //----------------------------------------------------
  // Rooms, with info of a specific day
  rooms: [],
};

const rooms = (state = initialState, action) => {

  const data = (action.payload && action.payload.data) || null;

  switch (action.type) {

    case FETCH_ROOMS: {
      const rooms = data.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase());

      return { ...state, rooms };
    }

    default:
      return state;
  }
};

export default rooms;