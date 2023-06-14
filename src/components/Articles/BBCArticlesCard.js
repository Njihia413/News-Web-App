import React from "react";
import dateFormat from 'dateformat';

function BBCArticlesCard ({ bbcArticle }) {
    return (
        <div className="col-md-3">
            <div className="card mb-2">
                <img src={bbcArticle.urlToImage ? bbcArticle.urlToImage : "https://scontent.fnuu2-1.fna.fbcdn.net/v/t39.30808-6/307744525_483795437117787_2281003730682989977_n.png?stp=dst-png_s960x960&_nc_cat=1&ccb=1-7&_nc_sid=e3f864&_nc_ohc=C7RRVBKvTSwAX_x1zEx&_nc_ht=scontent.fnuu2-1.fna&oh=00_AT9P5iTf82vqijmrfzajXXYyDSw0R1bmCpAiCb-XHrmduw&oe=63443944"} className="card-img-top" alt="BBC Article"/>
                <div className="card-body">
                    <h6>{bbcArticle.title}</h6>
                    <p className="card-text"><small>{bbcArticle.description.substring(0, 110)}...</small></p>
                    <div className="d-flex justify-content-between">
                        <div>
                            <p><strong><span className="badge rounded-pill bg-warning text-dark"><small>{dateFormat(bbcArticle.publishedAt)}</small></span></strong></p>
                        </div>
                        <div className="text-center">
                            <a href={bbcArticle.url} className="color-main"><small>Read More <i className="fa fa-arrow-right"></i></small></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BBCArticlesCard;