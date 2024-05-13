import PropTypes from 'prop-types';

/**
 * Represents a component displaying information about the currently playing song.
 * @function
 * @param {Object} props - The props passed to the component.
 * @param {Object} props.song - The song object containing details like name, displayName, and artist.
 */
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

/**
 * Specifies the props for the SongInfo component.
 * @static
 * @type {Object}
 */
SongInfo.propTypes = {
  /**
   * The object representing the currently playing song.
   * @type {Object}
   * @property {string} name - The name of the song.
   * @property {string} displayName - The display name of the song.
   * @property {string} artist - The artist of the song.
   */
  song: PropTypes.shape({
    name: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
  }).isRequired,
};

export default SongInfo;
