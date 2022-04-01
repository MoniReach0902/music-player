import React, { useState, useRef } from "react";

import logo from "./logo.svg";
import "./styles/app.scss";
//Adding components
import Player from "./components/player";
import Song from "./components/Song";
import data from "./util";
import Library from "./components/Library";
function App() {
  // Ref
  const audioRef = useRef(null);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const timeUpdateHnadler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };
  // Song
  const [songs, setSong] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[2]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
      />
      <audio
        onTimeUpdate={timeUpdateHnadler}
        onLoadedMetadata={timeUpdateHnadler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
