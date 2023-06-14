import React from "react";
import dateFormat from 'dateformat';


function CNNArticlesCard ({ cnnArticle }) {
    return (
        <div className="col-md-3">
            <div className="card mb-2">
                <img src={cnnArticle.urlToImage ? cnnArticle.urlToImage : "https://www.logodesignlove.com/wp-content/uploads/2010/06/cnn-logo-white-on-red.jpg"} className="card-img-top" alt="CNN Article"/>
                <div className="card-body">
                    <h6>{cnnArticle.title}</h6>
                    <p className="card-text"><small>{cnnArticle.description.substring(0, 110)}...</small></p>
                    <div className="d-flex justify-content-between">
                        <div>
                            <p><strong><span className="badge rounded-pill bg-warning text-dark"><small>{dateFormat(cnnArticle.publishedAt)}</small></span></strong></p>
                        </div>
                        <div className="text-center">
                            <a href={cnnArticle.url} className="color-main"><small>Read More <i className="fa fa-arrow-right"></i></small></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CNNArticlesCard;