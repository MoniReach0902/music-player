export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const playpromise = audioRef.current.play();
    if (playpromise !== undefined) {
      playpromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};
