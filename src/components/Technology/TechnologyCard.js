import React from "react";
import dateFormat from 'dateformat';

function TechnologyCard ({ technology }) {
    return (
        <div className="col-md-3">
            <div className="card mb-2">
                <img src={technology.urlToImage ? technology.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStOGRZXsqAHO0n9XMNx1PwKT3_AHykx8yeog&usqp=CAU"} className="card-img-top" alt="Technology Article"/>
                <div className="card-body">
                    <h6>{technology.title}</h6>
                    <p className="card-text"><small>{technology.description?.substring(0, 110)}...</small></p>
                    <div className="d-flex justify-content-between">
                        <div>
                            <p><strong><span className="badge rounded-pill bg-warning text-dark"><small>{dateFormat(technology.publishedAt)}</small></span></strong></p>
                        </div>
                        <div className="text-center">
                            <a href={technology.url} className="color-main"><small>Read More <i className="fa fa-arrow-right"></i></small></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnologyCard;