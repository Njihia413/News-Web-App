import React, { useEffect, useState } from "react";
import EntertainmentCard from "./EntertainmentCard";

function Entertainment () {
    const entertainmentUrl = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=1cb1374b1c3949498967822f550bec03&pageSize=12";
    const [entertainment, setEntertainment] = useState([]);

    //Fetch Entertainment Data
    useEffect(() => {
        fetch(`${entertainmentUrl}`)
        .then(response => response.json())
        .then(data => setEntertainment(data.articles))
    },[])

    const entertainmentList = entertainment.map((entertainmentdata => {
        return <EntertainmentCard
        key={entertainmentdata.title}
        entertainmentdata={entertainmentdata}
        />
    }))

    return (
        <>
        <div className="top-news m-2">
            <h3 className="text-uppercase headings text-center mt-5 mb-4">all news articles <br></br><small>Entertainment News</small></h3>
            <div className="row">
                {entertainmentList}
            </div>
        </div>
        </>
    )
}

export default Entertainment;