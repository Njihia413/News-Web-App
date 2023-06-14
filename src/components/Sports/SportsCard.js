import React from "react";
import dateFormat from 'dateformat';

function SportsCard ({ sport }) {
    return (
        <div className="col-md-3">
            <div className="card mb-2">
                <img src={sport.urlToImage ? sport.urlToImage : "https://img.freepik.com/premium-vector/sports-news-live-background-map-world-isolated-vector-illustration_150317-318.jpg?w=740"} className="card-img-top" alt="Sports Article"/>
                <div className="card-body">
                    <h6>{sport.title}</h6>
                    <p className="card-text"><small>{sport.description?.substring(0, 110)}...</small></p>
                    <div className="d-flex justify-content-between">
                        <div>
                            <p><strong><span className="badge rounded-pill bg-warning text-dark"><small>{dateFormat(sport.publishedAt)}</small></span></strong></p>
                        </div>
                        <div className="text-center">
                            <a href={sport.url} className="color-main"><small>Read More <i className="fa fa-arrow-right"></i></small></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SportsCard;