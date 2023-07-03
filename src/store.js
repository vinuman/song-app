import { createStore, combineReducers } from "redux";
import { songsReducer } from "./reducer/songsReducer";
import { dataReducer } from "./reducer/data.reducer";

const rootReducer = combineReducers({
  songs: dataReducer,
  selectedSong: songsReducer,
});

const store = createStore(rootReducer);

export default store;
