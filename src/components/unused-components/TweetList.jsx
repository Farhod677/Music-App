import React from 'react';
import Tweet from './Tweet';

export default function TweetList({ name, tweets, setTweets }) {
    return (
        <div className='tweet-list'>
            { tweets.map(tweet => (
                <Tweet key={tweet} tweets={tweets} name={name} setTweets={setTweets} tweet={tweet} />
            )) }
        </div>
    );
}