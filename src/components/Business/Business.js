import React, { useEffect, useState } from "react";
import BusinessCard from "./BusinessCard";

function Business () {
    const businessUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1cb1374b1c3949498967822f550bec03&pageSize=12";
    const [business, setBusiness] = useState([]);

    //Fetch Business Data
    useEffect(() => {
        fetch(`${businessUrl}`)
        .then(response => response.json())
        .then(data => setBusiness(data.articles))
    },[])

    const businessList = business.map((businessdata => {
        return <BusinessCard
        key={businessdata.name}
        businessdata={businessdata}
        />
    }))

    return (
        <>
        <div className="top-news m-2">
            <h3 className="text-uppercase headings text-center mt-5 mb-4">all news articles <br></br><small>Business News</small></h3>
            <div className="row">
                {businessList}
            </div>
        </div>
        </>
    )
}

export default Business;
