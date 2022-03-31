import React, { useState } from "react";

import logo from "./logo.svg";
import "./styles/app.scss";
//Adding components
import Player from "./components/player";
import Song from "./components/Song";
import data from "./util";
function App() {
  // Song
  const [songs, setSong] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[2]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
