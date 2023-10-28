import React from "react";
import './Main.css'

function Main(props) {
    const data = props.redditData.data?.children || [];

    return(
        <div className="main-posts">
            {props.error && <p>Error</p>}
            {!props.error && data.length === 0 && <p>Fetching... Please wait</p> }
            { data.length> 0 && (
                <div id="post-box">
                    <h3>Author name: {data[0].data.author}</h3>
                    <p>Subreddit: {data[0].data.subreddit_name_prefixed}</p>
                    <h4>Title:<br/> {data[0].data.title}</h4>
                    <p>{data[0].data.selftext}</p>
                    <video src={data[0].data.media.reddit_video.scrubber_media_url} />
                </div>
            )}
            { data.length> 0 && (
                <div id="post-box">
                    <h3>Author name: {data[1].data.author}</h3>
                    <p>Subreddit: {data[1].data.subreddit_name_prefixed}</p>
                    <h4>Title:<br/> {data[1].data.title}</h4>
                    <p>{data[1].data.selftext}</p>
                    <img src={data[1].data.media} />
                </div>
            )}
            { data.length> 0 && (
                <div id="post-box">
                    <h3>Author name: {data[2].data.author}</h3>
                    <p>Subreddit: {data[2].data.subreddit_name_prefixed}</p>
                    <h4>Title:<br/> {data[2].data.title}</h4>
                    <p>{data[2].data.selftext}</p>
                    <img src={data[2].data.media} />
                </div>
            )}
            { data.length> 0 && (
                <div id="post-box">
                    <h3>Author name: {data[3].data.author}</h3>
                    <p>Subreddit: {data[3].data.subreddit_name_prefixed}</p>
                    <h4>Title:<br/> {data[3].data.title}</h4>
                    <p>{data[3].data.selftext}</p>
                    <img src={data[3].data.media} />
                </div>
            )} 
        </div>
    )
}

export default Main;