import React from 'react';

export default function CreateTweet({ tweets, textInput, setTweets, setTextInput }) {
    const submitTweet = e => {
        e.preventDefault();
        setTweets([...tweets, textInput]);
        setTextInput("");
    };
    return (
        <form onSubmit={submitTweet}>
            <textarea value={textInput} onChange={e => setTextInput(e.target.value)} cols="50" rows="5"></textarea>
            <button>Post</button>
            <h1 onClick={() => setTextInput("")}>{textInput}</h1>
        </form>
    );
}