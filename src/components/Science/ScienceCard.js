import React from "react";
import dateFormat from 'dateformat';

function ScienceCard ({ sciencedata }) {
    return (
        <div className="col-md-3">
            <div className="card mb-2">
                <img src={sciencedata.urlToImage ? sciencedata.urlToImage : "https://www.sciencenews.org/wp-content/uploads/2019/08/sn-fallback.png"} className="card-img-top" alt="Science Article"/>
                <div className="card-body">
                    <h6>{sciencedata.title}</h6>
                    <p className="card-text"><small>{sciencedata.description?.substring(0, 110)}...</small></p>
                    <div className="d-flex justify-content-between">
                        <div>
                            <p><strong><span className="badge rounded-pill bg-warning text-dark"><small>{dateFormat(sciencedata.publishedAt)}</small></span></strong></p>
                        </div>
                        <div className="text-center">
                            <a href={sciencedata.url} className="color-main"><small>Read More <i className="fa fa-arrow-right"></i></small></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default ScienceCard;