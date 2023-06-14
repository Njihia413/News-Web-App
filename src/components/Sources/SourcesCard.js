import React from "react";

function SourcesCard ({ source }) {
    return (
        <div className="col-md-3">
            <div className="card">
                <a href={source.url}>{source.name}</a>
            </div>
        </div>
    )
}

export default SourcesCard;