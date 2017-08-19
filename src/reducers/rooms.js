import { FETCH_ROOMS } from '../actions';

//----------------------------------------------------
// Centralized application state
// For more information visit http://redux.js.org/
const initialState = {
  //----------------------------------------------------
  // Rooms, with info of a specific day
  rooms: [],
};

export default (state = initialState, action) => {
  switch (action.type) {

    case FETCH_ROOMS: {
      const rooms = action.payload.data.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase());

      return { ...state, rooms };
    }

    default:
      return state;
  }
};
