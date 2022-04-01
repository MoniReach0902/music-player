import React from "react";

const LibrarySong = ({
  song,
  setCurrentSong,
  songs,
  id,
  audioRef,
  isPlaying,
}) => {
  const selectSongHnadler = () => {
    const songSelected = songs.filter((state) => state.id === id);
    setCurrentSong(songSelected[0]);
    if (isPlaying) {
      const playpromise = audioRef.current.play();
      if (playpromise !== undefined) {
        playpromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };
  return (
    <div className="library-song" onClick={selectSongHnadler}>
      <img alt={song.cover} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};
export default LibrarySong;
