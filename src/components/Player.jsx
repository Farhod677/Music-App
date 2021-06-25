import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';

export default function Player({ song, songs, isPlaying, setIsPlaying, audioRef, setCurrentSong, setSongs }) {
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    });

    const activeSongHandler = (nextPrev) => {
        const newSongs = songs.map(s => {
            return s.id === nextPrev.id ? { ...nextPrev, active: true } : { ...s, active: false};
        });
        setSongs(newSongs);
    };
    
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const timeUpdateHandler = e => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({currentTime, duration});
    };

    const getTime = time => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    };

    const dragHandler = e => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value});
    };

    const skipTrackHandler = async (direction) => {
        const index = songs.findIndex(s => s.id === song.id);
        if (direction === 'forward') {
            await setCurrentSong(songs[(index + 1) % songs.length]); 
            activeSongHandler(songs[(index + 1) % songs.length]);
        } 

        if (direction === 'back') {
            if ((index - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1]);
                activeSongHandler(songs[songs.length - 1]);
                if (isPlaying) audioRef.current.play();      
                return;
            }
            await setCurrentSong(songs[(index - 1) % songs.length]);
            activeSongHandler(songs[(index - 1) % songs.length]);
        }
        if (isPlaying) audioRef.current.play();      
    };

    const songEndHandler = async () => {
        const index = songs.findIndex(s => s.id === song.id);
        await setCurrentSong(songs[(index + 1) % songs.length]);
        if (isPlaying) audioRef.current.play();
    };  

    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                    min={0} 
                    max={songInfo.duration || 0}
                    value={songInfo.currentTime}
                    type="range"
                    onChange={dragHandler}
                />
                <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={() => skipTrackHandler('back')} className="skip-back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon onClick={() => skipTrackHandler('forward')} className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>
            <audio 
                onTimeUpdate={timeUpdateHandler} 
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef} 
                src={song.audio}
                onEnded={songEndHandler}
            ></audio>
        </div>
    );
}