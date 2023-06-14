import React from "react";
import BBCHeadlinesCard from "./BBCHeadlinesCard";
import CNNHeadlinesCard from "./CNNHeadlinesCard";
import GoogleHeadlinesCard from "./GoogleHeadlinesCard";

function MainHeadlinesCard ({bbcHeadlines, cnnHeadlines, googleHeadlines}) {

    console.log(bbcHeadlines)
    console.log(cnnHeadlines)
    console.log(googleHeadlines)

    const bbcheadlinesList = bbcHeadlines.map((bbcHeadline) => {
        return (
            <BBCHeadlinesCard
            key={bbcHeadline.source.id}
            bbcHeadline={bbcHeadline}
            />
        )
    })

    const cnnHeadlinesList = cnnHeadlines.map((cnnHeadline => {
        return (
            <CNNHeadlinesCard
            key={cnnHeadline.title}
            cnnHeadline={cnnHeadline}
            />
        )
    }))

    const googleHeadlinesList = googleHeadlines.map((googleHeadline => {
        return (
            <GoogleHeadlinesCard
            key={googleHeadline.title}
            googleHeadline={googleHeadline}
            />
        )
    }))

   
    return (
        <div className="headlinecard mt-2">
            <div className="m-2">
                <h3 className="news-headings text-uppercase text-center">top headlines today</h3>
                <div className="row">
                    <div className="col-md-6">
                       {bbcheadlinesList}
                    </div>
                    <div className="col-md-6 news-right">
                        <div className="row">
                            <div className="col-md-6">
                                {cnnHeadlinesList}
                            </div>
                            <div className="col-md-6">
                                {googleHeadlinesList}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHeadlinesCard;