import React, { useState, useRef } from "react";

import logo from "./logo.svg";
import "./styles/app.scss";
//Adding components
import Player from "./components/player";
import Song from "./components/Song";
import data from "./data";
import Library from "./components/Library";
import Nav from "./components/Nav";
// import data from "./data";
function App() {
  // Ref
  const audioRef = useRef(null);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const timeUpdateHnadler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    // calulate percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const anaimation = Math.round((roundedCurrent / roundedDuration) * 100);
    console.log(anaimation);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: anaimation,
    });
  };
  // Song
  const [songs, setSong] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSong={setSong}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSong={setSong}
        libraryStatus={libraryStatus}
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
