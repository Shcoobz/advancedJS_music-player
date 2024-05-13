import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Represents a component displaying the progress bar for the currently playing song.
 * @function
 * @param {Object} props - The props passed to the component.
 * @param {boolean} props.isPlaying - Indicates whether the music is currently playing.
 * @param {Function} props.setIsPlaying - A function to set the playing state of the music.
 * @param {Object} props.song - The song object containing details like name.
 */
function ProgressBar({ isPlaying, setIsPlaying, song }) {
  const progressRef = useRef(null);
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audioElement = audioRef.current;

    /**
     * Updates the duration state with the duration of the audio element.
     * @function
     */
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

  /**
   * Formats the time in minutes and seconds.
   * @function
   * @param {number} time - The time in seconds.
   * @returns {string} - The formatted time string (e.g., '03:45').
   */
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');

    return `${minutes}:${seconds}`;
  }

  /**
   * Updates the progress bar based on the current playback time.
   * @function
   */
  function updateProgressBar() {
    const progressPercent =
      (audioRef.current.currentTime / (audioRef.current.duration || 1)) * 100;
    progressRef.current.style.width = `${progressPercent}%`;
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  }

  /**
   * Sets the playback time based on the position of the click on the progress bar.
   * @function
   * @param {Event} e - The click event.
   */
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

/**
 * Specifies the props for the ProgressBar component.
 * @static
 * @type {Object}
 */
ProgressBar.propTypes = {
  /**
   * Indicates whether the music is currently playing.
   * @type {boolean}
   */
  isPlaying: PropTypes.bool.isRequired,
  /**
   * A function to set the playing state of the music.
   * @type {Function}
   */
  setIsPlaying: PropTypes.func.isRequired,
  /**
   * The song object containing details like name.
   * @type {Object}
   * @property {string} name - The name of the song.
   */
  song: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProgressBar;
