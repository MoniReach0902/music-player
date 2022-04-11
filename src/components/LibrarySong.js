import React from "react";
import { playAudio } from "../util";
const LibrarySong = ({
  song,
  setCurrentSong,
  songs,
  id,
  audioRef,
  isPlaying,
  setSong,
}) => {
  const selectSongHnadler = () => {
    const songSelected = songs.filter((state) => state.id === id);
    setCurrentSong(songSelected[0]);
    // Add active
    const newSong = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSong(newSong);
    // check song playing
    playAudio(isPlaying, audioRef);
  };
  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={selectSongHnadler}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};
export default LibrarySong;
