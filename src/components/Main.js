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
            </div>
        );
    };

    // console.log(renderPost())
    return (
        <div className="main-posts">
            {props.error && <p>Error</p>}
            {!props.error && data.length === 0 && <p>Fetching... Please wait</p>}
            {data.map((post) => renderPost(post))}
        </div>
    )
}

export default Main;
