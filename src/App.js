import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState, useEffect } from "react";

export default function App() {
    const [redditData, setRedditData] = useState({});
    const [error, setError] =useState(false)

    useEffect(() => {
        fetch('https://www.reddit.com/r/programming/top.json?limit=10')
        .then((response) => response.json())
        .then((jsonData) => setRedditData(jsonData))
        .catch((error) => setError(true))
    },[])

    console.log(redditData)
    return(
        <>
            <Navbar />
            <Main redditData={redditData} error={error}/>
        </>
    )
}