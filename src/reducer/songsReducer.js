import { SELECT_SONG } from "../actions/actionTypes";

/* let INITIAL_STATE = {}; */

export const songsReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_SONG:
      return action.payload;
    default:
      return state;
  }
};
