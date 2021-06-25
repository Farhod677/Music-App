import React from 'react';

export default function Tweet({ name, tweet, tweets, setTweets }) {
    const deleteTweet = () => {
        const posts = tweets.filter(t => t !== tweet);
        setTweets(posts);
    }

    return (
        <div className='tweet'>
            <h2>Name {name}</h2>
            <h3>{tweet}</h3>
            <button onClick={deleteTweet}>Delete</button>
        </div>
    );
}