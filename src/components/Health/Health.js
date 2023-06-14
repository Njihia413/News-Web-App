import React, { useEffect, useState } from "react";
import HealthCard from "./HealthCard";

function Health () {
    const healthUrl = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=1cb1374b1c3949498967822f550bec03&pageSize=12"
    const [health, setHealth] = useState([]);

    //Fetch Health Data
    useEffect(() => {
        fetch(`${healthUrl}`)
        .then(response => response.json())
        .then(data => setHealth(data.articles))
    },[])

    const healthList = health.map((healthdata => {
        return <HealthCard
        key={healthdata.name}
        healthdata={healthdata}
        />
    }))

    return (
        <>
        <div className="top-news m-2">
            <h3 className="text-uppercase headings text-center mt-5 mb-4">all news articles <br></br><small>Health News</small></h3>
            <div className="row">
                {healthList}
            </div>
        </div>
        </>
    )
}

export default Health;