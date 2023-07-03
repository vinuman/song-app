import { useSelector } from "react-redux";

const Songdetails = () => {
  let selectedSong = useSelector((state) => state.selectedSong);
  return (
    <>
      <div className="song-details">
        <h1>Song details</h1>
        {selectedSong && (
          <div>
            <h3>{selectedSong.name}</h3>
            <h3>{selectedSong.duration}</h3>
            <h3>{selectedSong.author}</h3>
            <h3>{selectedSong.genre}</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Songdetails;
