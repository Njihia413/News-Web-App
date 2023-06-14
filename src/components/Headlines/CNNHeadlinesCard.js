import React from "react";

function CNNHeadlinesCard ({ cnnHeadline }) {
   return (
    <div className="card-image p-4 mb-3" style={{backgroundImage: `url(${cnnHeadline.urlToImage ? cnnHeadline.urlToImage : "https://www.logodesignlove.com/wp-content/uploads/2010/06/cnn-logo-white-on-red.jpg"})`}}>
        <div className="headline">
            <h5 className="news-headings mt-2">{cnnHeadline.title}</h5>
            <button className="btn btn-primary btn-sm mt-3">CNN News</button>
        </div>
    </div>
    ) 
}

export default CNNHeadlinesCard;