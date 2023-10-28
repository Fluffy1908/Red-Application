import React from "react";

function Main(props) {
    const data = props.redditData.data?.children || [];

    return(
        <div className="main-posts">
            <h1>Post Heading</h1>
            {props.error && <p>Error</p>}
            {!props.error && data.length === 0 && <p>Loading... Please wait</p> }
            { data.length> 0 && (
                <>
                    <h3>Author name: {data[0].data.author}</h3>
                </>
            )}
        </div>
    )
}

export default Main;