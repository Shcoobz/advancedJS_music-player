import { useState } from 'react';
import PlayerControls from './components/PlayerControls';
import ProgressBar from './components/ProgressBar';
import SongInfo from './components/SongInfo';
import songs from './songs';

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlayPause() {
    setIsPlaying(!isPlaying);
  }

  function handlePrevSong() {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  }

  function handleNextSong() {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <div className='player-container'>
      <SongInfo song={songs[currentSongIndex]} />
      <ProgressBar isPlaying={isPlaying} song={songs[currentSongIndex]} />
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
