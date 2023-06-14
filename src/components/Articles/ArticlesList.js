import React from "react";
import MainArticlesCard from "./MainArticlesCard";

function ArticlesList ({ cnnArticles, bbcArticles, aljazeeraArticles}) {
    return (
        <div>
            <MainArticlesCard cnnArticles={cnnArticles} bbcArticles={bbcArticles} aljazeeraArticles={aljazeeraArticles}/>
        </div>
    )
}

export default ArticlesList;