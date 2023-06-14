import React, { useEffect, useState } from "react";
import ArticlesList from "./ArticlesList";

function Articles () {
    const cnnArticlesUrl = "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=1cb1374b1c3949498967822f550bec03&pageSize=8";
    const bbcArticlesUrl  = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1cb1374b1c3949498967822f550bec03&pageSize=8";
    const aljazeeraArticlesUrl = "https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=1cb1374b1c3949498967822f550bec03&pageSize=8"
    const [cnnArticles, setcnnArticles] = useState([]);
    const [bbcArticles, setbbcArticles] = useState([]);
    const [aljazeeraArticles, setaljazeeraArticles] = useState([]);

    //Fetch CNN Articles
    useEffect(() => {
        fetch(`${cnnArticlesUrl}`)
        .then(response => response.json())
        .then(data => setcnnArticles(data.articles))
    },[])
    

    //Fetch BBC Articles
     useEffect(() => {
        fetch(`${bbcArticlesUrl}`)
        .then(response => response.json())
        .then(data => setbbcArticles(data.articles))
    },[])

    //Fetch Al-Jazeera English Articles
    useEffect(() => {
        fetch(`${aljazeeraArticlesUrl}`)
        .then(response => response.json())
        .then(data => setaljazeeraArticles(data.articles))
    },[])

    return (
        <div>
            <ArticlesList cnnArticles={cnnArticles} bbcArticles={bbcArticles} aljazeeraArticles={aljazeeraArticles} setcnnArticles={setcnnArticles} setbbcArticles={setbbcArticles} setaljazeeraArticles={setaljazeeraArticles}/>
        </div>
    )
}

export default Articles;