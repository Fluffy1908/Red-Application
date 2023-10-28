import React from "react";
import './Main.css'

function Main(props) {
    const data = props.redditData.data?.children || [];

    const renderPost = (post) => {
        return (
            <div id="post-box">
                <h3>Author name: {post.data.author}</h3>
                <p>Subreddit: {post.data.subreddit_name_prefixed}</p>
                <h4>Title:<br/> {post.data.title}</h4>
                <p>{post.data.selftext}</p>
                {post.data.secure_media ? (<video src={post.data.secure_media.reddit_video.scrubber_media_url} controls width="320" height="240" autoplay/>) : "" }
            </div>
        );
    };

    return (
        <div className="main-posts">
            {props.error && <p>Error on fetch</p>}
            {props.redditData.error ? <p>Too many requests: Error 429</p> : ""}
            {!props.error && data.length === 0 && !props.redditData.error && <p>Fetching... Please wait</p>}
            {data.map((post) => renderPost(post))}
        </div>
    )
}

export default Main;
