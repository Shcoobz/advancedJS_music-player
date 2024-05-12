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

export default PlayerControls;
