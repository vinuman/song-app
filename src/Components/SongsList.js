import selectSong from "../actions/songActions";
import { useSelector, useDispatch } from "react-redux";

const SongsList = () => {
  const songs = useSelector((state) => state.songs);
  const dispatch = useDispatch();
  return (
    <>
      <div className="songs">
        {songs.map((song, index) => (
          <div className="songs-list" key={index}>
            <h1>{song.name}</h1>
            <button onClick={() => dispatch(selectSong(song))}>Details</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default SongsList;
