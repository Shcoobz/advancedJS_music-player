import PropTypes from 'prop-types';

function SongInfo({ song }) {
  return (
    <>
      <div className='img-container'>
        <img src={`/react_music-player/img/${song.name}.jpg`} alt='Album Art' />
      </div>
      <h2 id='title'>{song.displayName}</h2>
      <h3 id='artist'>{song.artist}</h3>
      <audio src={`/react_music-player/music/${song.name}.mp3`}></audio>
    </>
  );
}

SongInfo.propTypes = {
  song: PropTypes.shape({
    name: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
  }).isRequired,
};

export default SongInfo;
