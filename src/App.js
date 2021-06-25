import React, { useState, useRef } from 'react';
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
import Navbar from './components/Navbar';
import './styles/App.scss';
import data from './data';

function App() {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
      <Navbar libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song song={currentSong} />
      <Player setSongs={setSongs} songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} song={currentSong}/>
      <Library libraryStatus={libraryStatus} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} setCurrentSong={setCurrentSong} songs={songs}/>
    </div>
  );
}


export default App;

// import TweetList from './components/TweetList';
// import CreateTweet from './components/CreateTweet';

// const [name, setName] = useState('Farhod');
//   const [textInput, setTextInput] = useState('');
//   const [tweets, setTweets] = useState([]);
  
//   useEffect(() => {
//     console.log('We run a function yeyy');
//   }, [textInput]);

//   return (
//     <div className="App">
//       <CreateTweet 
//         tweets={tweets} 
//         setTweets={setTweets}
//         textInput={textInput}
//         setTextInput={setTextInput}
//       />
//       <button onClick={() => setName('John Smith')}>Change Name</button>
//       <TweetList name={name} tweets={tweets} setTweets={setTweets} />
//     </div>
//   );

