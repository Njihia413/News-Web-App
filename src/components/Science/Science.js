import React, { useEffect, useState } from "react";
import ScienceCard from "./ScienceCard";

function Science () {
    const scienceUrl = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=1cb1374b1c3949498967822f550bec03&pageSize=12";
    const [science, setScience] = useState([]);
    
    //Fetch Science Data
    useEffect(() => {
        fetch(`${scienceUrl}`)
        .then(response => response.json())
        .then(data => setScience(data.articles))
    },[])

    const scienceList = science.map((sciencedata => {
        return <ScienceCard
        key={sciencedata.name}
        sciencedata={sciencedata}
        />
    }))

    return (
        <>
        <div className="top-news m-2">
            <h3 className="text-uppercase headings text-center mt-5 mb-4">all news articles <br></br><small>Science News</small></h3>
            <div className="row">
                {scienceList}
            </div>
        </div>
        </>
    )
}

export default Science;