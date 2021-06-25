import React from 'react';

export default function Song({ song }) {
    return (
        <div className="song-container">
            <img src={song.cover} alt={song.name}/>
            <h2>{song.name}</h2>
            <h3>{song.artist}</h3>
        </div>
    );
}