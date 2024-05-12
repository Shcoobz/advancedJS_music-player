function SongInfo({ song }) {
  return (
    <>
      <div className='img-container'>
        <img src={`/img/${song.name}.jpg`} alt='Album Art' />
      </div>
      <h2 id='title'>{song.displayName}</h2>
      <h3 id='artist'>{song.artist}</h3>
      <audio src={`/music/${song.name}.mp3`}></audio>
    </>
  );
}

export default SongInfo;
