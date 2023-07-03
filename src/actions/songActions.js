import { SELECT_SONG } from "./actionTypes";

//action creators

const selectSong = (song) => {
  return {
    type: SELECT_SONG,
    payload: song,
  };
};

export default selectSong;
