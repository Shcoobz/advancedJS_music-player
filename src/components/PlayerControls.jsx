import PropTypes from 'prop-types';

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

PlayerControls.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlayPause: PropTypes.func.isRequired,
  onPrevSong: PropTypes.func.isRequired,
  onNextSong: PropTypes.func.isRequired,
};

export default PlayerControls;
