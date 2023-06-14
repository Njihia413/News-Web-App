import React from "react";
import dateFormat from 'dateformat';

function BusinessCard ({ businessdata }) {
    return  (
        <div className="col-md-3">
            <div className="card mb-2">
                <img src={businessdata.urlToImage ? businessdata.urlToImage : "https://allnews.ng/uploads/posts/2021/04/03/post-07-38-57-0.jpg"} className="card-img-top" alt="Business Article"/>
                <div className="card-body">
                    <h6>{businessdata.title}</h6>
                    <p className="card-text"><small>{businessdata.description?.substring(0, 110)}...</small></p>
                    <div className="d-flex justify-content-between">
                        <div>
                            <p><strong><span className="badge rounded-pill bg-warning text-dark"><small>{dateFormat(businessdata.publishedAt)}</small></span></strong></p>
                        </div>
                        <div className="text-center">
                            <a href={businessdata.url} className="color-main"><small>Read More <i className="fa fa-arrow-right"></i></small></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessCard;