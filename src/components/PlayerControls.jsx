import PropTypes from 'prop-types';

/**
 * Represents a component rendering player controls for the music player.
 * @function
 * @param {Object} props - The props passed to the component.
 * @param {boolean} props.isPlaying - Indicates whether the music is currently playing.
 * @param {Function} props.onPlayPause - A function to toggle play/pause state.
 * @param {Function} props.onPrevSong - A function to play the previous song.
 * @param {Function} props.onNextSong - A function to play the next song.
 */
function PlayerControls({ isPlaying, onPlayPause, onPrevSong, onNextSong }) {
  return (
    <div className='player-controls'>
      <i className='fas fa-backward' onClick={onPrevSong} title='Previous'></i>
      <i
        className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'} main-button`}
        onClick={onPlayPause}
        title={isPlaying ? 'Pause' : 'Play'}></i>
      <i className='fas fa-forward' onClick={onNextSong} title='Next'></i>
    </div>
  );
}

/**
 * Specifies the props for the PlayerControls component.
 * @static
 * @type {Object}
 */
PlayerControls.propTypes = {
  /**
   * Indicates whether the music is currently playing.
   * @type {boolean}
   */
  isPlaying: PropTypes.bool.isRequired,
  /**
   * A function to toggle play/pause state.
   * @type {Function}
   */
  onPlayPause: PropTypes.func.isRequired,
  /**
   * A function to play the previous song.
   * @type {Function}
   */
  onPrevSong: PropTypes.func.isRequired,
  /**
   * A function to play the next song.
   * @type {Function}
   */
  onNextSong: PropTypes.func.isRequired,
};

export default PlayerControls;
