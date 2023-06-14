import React from "react";
import dateFormat from 'dateformat';

function AlJazeeraArticlesCard ({ aljazeeraArticle }) {
    return (
        <div className="col-md-3">
            <div className="card mb-2">
                <img src={aljazeeraArticle.urlToImage ? aljazeeraArticle.urlToImage : "https://www.ifj.org/fileadmin/_processed_/a/8/csm_Al_Jazeera_newspaper_43e697c467.jpg"} className="card-img-top" alt="AlJazeera Article"/>
                <div className="card-body">
                    <h6>{aljazeeraArticle.title}</h6>
                    <p className="card-text"><small>{aljazeeraArticle.description.substring(0, 110)}...</small></p>
                    <div className="d-flex justify-content-between">
                        <div>
                            <p><strong><span className="badge rounded-pill bg-warning text-dark"><small>{dateFormat(aljazeeraArticle.publishedAt)}</small></span></strong></p>
                        </div>
                        <div className="text-center">
                            <a href={aljazeeraArticle.url} className="color-main"><small>Read More <i className="fa fa-arrow-right"></i></small></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlJazeeraArticlesCard;