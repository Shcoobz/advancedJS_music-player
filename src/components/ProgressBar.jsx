import { useState, useEffect, useRef } from 'react';

function ProgressBar({ isPlaying, setIsPlaying, song }) {
  const progressRef = useRef(null);
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audioElement = audioRef.current;
    const loadMetadata = () => {
      setDuration(audioElement.duration || 0);
    };

    audioElement.addEventListener('loadedmetadata', loadMetadata);

    progressRef.current.style.width = '0%';
    setCurrentTime(0);

    if (isPlaying) {
      const playPromise = audioElement.play();

      if (playPromise !== undefined) {
        playPromise.then().catch((error) => {
          console.error('Playback failed: ', error);
          setIsPlaying(false);
        });
      }
    } else {
      audioElement.pause();
    }

    return () => {
      audioElement.removeEventListener('loadedmetadata', loadMetadata);
    };
  }, [isPlaying, setIsPlaying, song.name]);

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');

    return `${minutes}:${seconds}`;
  }

  function updateProgressBar() {
    const progressPercent =
      (audioRef.current.currentTime / (audioRef.current.duration || 1)) * 100;
    progressRef.current.style.width = `${progressPercent}%`;
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  }

  function setProgressBar(e) {
    const width = e.target.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    const { duration } = audioRef.current;
    audioRef.current.currentTime = (clickX / width) * duration;
    updateProgressBar();
  }

  return (
    <>
      <div className='progress-container' onClick={setProgressBar}>
        <div className='progress' ref={progressRef}></div>
        <div className='duration-wrapper'>
          <span id='current-time'>{formatTime(currentTime)}</span>
          <span id='duration'>{formatTime(duration)}</span>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={`/react_music-player/music/${song.name}.mp3`}
        onTimeUpdate={updateProgressBar}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}></audio>
    </>
  );
}

export default ProgressBar;
