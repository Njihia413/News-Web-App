import React from "react";
import dateFormat from 'dateformat';

function HealthCard ({ healthdata }) {
    return (
        <div className="col-md-3">
            <div className="card mb-2">
                <img src={healthdata.urlToImage ? healthdata.urlToImage : "https://www.ishn.com/ext/resources/Generic/Responsive-default/HealthNews.jpg?1583412092"} className="card-img-top" alt="Health Article"/>
                <div className="card-body">
                    <h6>{healthdata.title}</h6>
                    <p className="card-text"><small>{healthdata.description?.substring(0, 110)}...</small></p>
                    <div className="d-flex justify-content-between">
                        <div>
                            <p><strong><span className="badge rounded-pill bg-warning text-dark"><small>{dateFormat(healthdata.publishedAt)}</small></span></strong></p>
                        </div>
                        <div className="text-center">
                            <a href={healthdata.url} className="color-main"><small>Read More <i className="fa fa-arrow-right"></i></small></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthCard;