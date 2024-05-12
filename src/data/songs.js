/**
 * A module exporting a list of song objects for use in a music player application.
 * Each song object contains metadata about the song including its name, display name, and artist.
 */

const songs = [
  {
    name: 'jacinto-1',
    displayName: 'Electric Chill Machine',
    artist: 'Jacinto Design',
  },
  {
    name: 'jacinto-2',
    displayName: 'Seven Nation Army (Remix)',
    artist: 'Jacinto Design',
  },
  {
    name: 'jacinto-3',
    displayName: 'Goodnight, Disco Queen',
    artist: 'Jacinto Design',
  },
  {
    name: 'metric-1',
    displayName: 'Front Row (Remix)',
    artist: 'Metric/Jacinto Design',
  },
];

export default songs;

/**
 * @typedef {Object} Song
 * @property {string} name - The unique identifier for the song, used for loading the track.
 * @property {string} displayName - The name of the song as displayed in the UI.
 * @property {string} artist - The name of the artist or group who performed the song.
 */

/**
 * @type {Song[]} songs - An array of song objects available for playback in the application.
 */
