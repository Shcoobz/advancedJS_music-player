import { useState } from 'react';
import PlayerControls from './components/PlayerControls';
import ProgressBar from './components/ProgressBar';
import SongInfo from './components/SongInfo';
import songs from './data/songs';

/**
 * Represents the main application component responsible for rendering the music player.
 * @function
 */
function App() {
  /**
   * Represents the index of the currently playing song.
   * @type {number}
   */
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  /**
   * Represents the state indicating whether the music is currently playing or paused.
   * @type {boolean}
   */
  const [isPlaying, setIsPlaying] = useState(false);

  /**
   * Toggles the play/pause state of the music player.
   * @function
   */
  function handlePlayPause() {
    setIsPlaying(!isPlaying);
  }

  /**
   * Switches to the previous song in the playlist.
   * @function
   */
  function handlePrevSong() {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );

    setIsPlaying(true);
  }

  /**
   * Switches to the next song in the playlist.
   * @function
   */
  function handleNextSong() {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1
    );

    setIsPlaying(true);
  }

  return (
    <div className='player-container'>
      <SongInfo song={songs[currentSongIndex]} />
      <ProgressBar
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        song={songs[currentSongIndex]}
      />
      <PlayerControls
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onPrevSong={handlePrevSong}
        onNextSong={handleNextSong}
      />
    </div>
  );
}

export default App;
