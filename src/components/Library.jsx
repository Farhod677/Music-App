import React from 'react';
import LibrarySong from './LibrarySong';

export default function Library({ libraryStatus, songs, setCurrentSong, audioRef, isPlaying, setSongs }) {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => (
                    <LibrarySong songs={songs} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} key={song.id} id={song.id} setCurrentSong={setCurrentSong} song={song}/>
                ))}
            </div>
        </div>
    );
}