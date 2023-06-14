import React, { useEffect, useState } from "react";
import HeadlinesList from "../Headlines/HeadlinesList";

function Headlines () {
    const bbcHeadlinesUrl = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1cb1374b1c3949498967822f550bec03&pageSize=1"
    const cnnHeadlinesUrl = "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=1cb1374b1c3949498967822f550bec03&pageSize=2"
    const googleHeadlinesUrl = "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=1cb1374b1c3949498967822f550bec03&pageSize=2"
    const [bbcHeadlines, setbbcHeadlines] = useState([]);
    const [cnnHeadlines, setcnnHeadlines] = useState([]);
    const [googleHeadlines, setgoogleHeadlines] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);


    //Fetch BBC Headlines
    useEffect(() => {
        fetch(`${bbcHeadlinesUrl}`)
        .then(response => response.json())
        .then(data => {
            setbbcHeadlines(data.articles)
            setIsLoaded(true);
        })
    }, [])

    //Fetch CNN Headlines
    useEffect(() => {
        fetch(`${cnnHeadlinesUrl}`)
        .then(response => response.json())
        .then(data => {
            setcnnHeadlines(data.articles)
            setIsLoaded(true);
        })
    }, [])

    //Fetch Google Headlines
    useEffect(() => {
        fetch(`${googleHeadlinesUrl}`)
        .then(response => response.json())
        .then(data => {
            setgoogleHeadlines(data.articles)
            setIsLoaded(true);
        })
    }, [])

    if (!isLoaded) return (
        <div className="text-center">
            <div className="spinner-grow text-danger mt-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div> 
        </div>
    );

    return (
        <div>
            <HeadlinesList bbcHeadlines={bbcHeadlines} cnnHeadlines={cnnHeadlines} googleHeadlines={googleHeadlines} setbbcHeadlines={setbbcHeadlines} setcnnHeadlines={setcnnHeadlines} setgoogleHeadlines={setgoogleHeadlines}/>
        </div>
    )
}

export default Headlines;