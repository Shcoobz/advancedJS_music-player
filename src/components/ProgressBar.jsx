import { useEffect, useRef } from 'react';

function ProgressBar({ isPlaying, song }) {
  const progressRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');

    return `${minutes}:${seconds}`;
  }

  function updateProgressBar() {
    const { duration, currentTime } = audioRef.current;
    const progressPercent = (currentTime / duration) * 100;

    progressRef.current.style.width = `${progressPercent}%`;
  }

  function setProgressBar(e) {
    const width = e.target.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    const { duration } = audioRef.current;
    audioRef.current.currentTime = (clickX / width) * duration;
  }

  return (
    <>
      <div className='progress-container' onClick={setProgressBar}>
        <div className='progress' ref={progressRef}></div>
        <div className='duration-wrapper'>
          <span id='current-time'>{formatTime(audioRef.current?.currentTime || 0)}</span>
          <span id='duration'>{formatTime(audioRef.current?.duration || 0)}</span>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={`/react_music-player/music/${song.name}.mp3`}
        onTimeUpdate={updateProgressBar}></audio>
    </>
  );
}

export default ProgressBar;
