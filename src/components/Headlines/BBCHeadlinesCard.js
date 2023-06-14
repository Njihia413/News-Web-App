import React from "react";

function BBCHeadlinesCard ({ bbcHeadline }) {
    return (
        <div className="card-image p-4 mb-3" style={{backgroundImage: `url(${bbcHeadline.urlToImage ? bbcHeadline.urlToImage : "https://scontent.fnuu2-1.fna.fbcdn.net/v/t39.30808-6/307744525_483795437117787_2281003730682989977_n.png?stp=dst-png_s960x960&_nc_cat=1&ccb=1-7&_nc_sid=e3f864&_nc_ohc=C7RRVBKvTSwAX_x1zEx&_nc_ht=scontent.fnuu2-1.fna&oh=00_AT9P5iTf82vqijmrfzajXXYyDSw0R1bmCpAiCb-XHrmduw&oe=63443944"})`}}>
            <div className="headline-text">
                <h4 className="news-headings mt-2">{bbcHeadline.title}</h4>
                <button className="btn btn-primary btn-sm mt-3">{bbcHeadline.author}</button>
            </div>
        </div>
    )
}

export default BBCHeadlinesCard;