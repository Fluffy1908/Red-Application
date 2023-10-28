import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState, useEffect } from "react";

export default function App() {
    const [redditData, setRedditData] = useState({});
    const [error, setError] =useState(false)

    function randomFetchUrl() {
        const randomNum = Math.floor(Math.random() *5)

        if (randomNum === 0) {
            return 'https://www.reddit.com/r/GameStop/top.json?limit=10'
        } else if (randomNum === 1) {
            return 'https://www.reddit.com/r/apple/top.json?limit=10'
        } else if (randomNum === 2) {
            return 'https://www.reddit.com/r/apple/top.json?limit=10'
        } else if (randomNum === 3) {
            return 'https://www.reddit.com/r/cars/top.json?limit=10'
        } else if (randomNum === 4) {
            return 'https://www.reddit.com/r/Minecraft/top.json?limit=10'
        } else if (randomNum === 5) {
            return 'https://www.reddit.com/r/Battlefield/top.json?limit=10'
        } else {
            return false
        }
    }

    useEffect(() => {
        fetch(randomFetchUrl())
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