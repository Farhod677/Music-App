import React from 'react';

export default function LibrarySong({ song, songs, setCurrentSong, audioRef, isPlaying, setSongs, id }) {
    const activeSong = () => {
        const newSongs = songs.map(s => {
            return s.id === id ? { ...song, active: true } : { ...s, active: false};
        });
        setSongs(newSongs);
    }

    const changeMusicHanler = async () => {
        await setCurrentSong(song);
        if (isPlaying) audioRef.current.play();
        activeSong();
    };

    return (
        <div onClick={changeMusicHanler} className={`library-song ${song.active ? 'selected' : ''}`}>
            <img src={song.cover} alt={song.name}/>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
}