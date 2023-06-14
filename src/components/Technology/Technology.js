import React, { useState, useEffect } from "react";
import TechnologyCard from "./TechnologyCard";

function Technology () {

    const technologyUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=1cb1374b1c3949498967822f550bec03&pageSize=12";
    const [technologies, setTechnologies] = useState([])

    //Fetch Technology Articles
    useEffect(() => {
        fetch(`${technologyUrl}`)
        .then(response => response.json())
        .then(data => setTechnologies(data.articles))
    },[])

    //console.log(technologies)
    const technologyList = technologies.map((technology => {
        return (
            <TechnologyCard
            key={technology.name}
            technology={technology}
            setTechnologies={setTechnologies}
            />
        )
    }))

    return (
        <>
        <div className="top-news m-2">
            <h3 className="text-uppercase headings text-center mt-5 mb-4">all news articles <br></br><small>Technology News</small></h3>
            <div className="row">
                {technologyList}
            </div>
        </div>
        </>
    )
}

export default Technology;