import React from "react";
import dateFormat from 'dateformat';

function EntertainmentCard ({ entertainmentdata }) {
    return (
        <div className="col-md-3">
            <div className="card mb-2">
                <img src={entertainmentdata.urlToImage ? entertainmentdata.urlToImage : "https://www.frontghana.com/wp-content/uploads/2021/09/Entertainment-News.jpeg"} className="card-img-top" alt="Entertainment Article"/>
                <div className="card-body">
                    <h6>{entertainmentdata.title}</h6>
                    <p className="card-text"><small>{entertainmentdata.description?.substring(0, 110)}...</small></p>
                    <div className="d-flex justify-content-between">
                        <div>
                            <p><strong><span className="badge rounded-pill bg-warning text-dark"><small>{dateFormat(entertainmentdata.publishedAt)}</small></span></strong></p>
                        </div>
                        <div className="text-center">
                            <a href={entertainmentdata.url} className="color-main"><small>Read More <i className="fa fa-arrow-right"></i></small></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EntertainmentCard;