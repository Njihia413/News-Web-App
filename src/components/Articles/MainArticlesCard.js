import React from "react";
import AlJazeeraArticlesCard from "./AlJazeeraArticlesCard";
import BBCArticlesCard from "./BBCArticlesCard";
import CNNArticlesCard from "./CNNArticlesCard";

function MainArticlesCard ({ cnnArticles, bbcArticles, aljazeeraArticles }) {
    //console.log(cnnArticles)
    //console.log(bbcArticles)
   //console.log(aljazeeraArticles)
    const cnnArticlesList = cnnArticles.map((cnnArticle => {
        return (
            <CNNArticlesCard
            key={cnnArticle.author}
            cnnArticle={cnnArticle}
            />
        )
    }))

    const bbcArticlesList = bbcArticles.map((bbcArticle => {
        return (
            <BBCArticlesCard
            key={bbcArticle.description}
            bbcArticle={bbcArticle}
            />
        )
    }))

    const aljazeeraArticlesList = aljazeeraArticles.map((aljazeeraArticle => {
        return (
            <AlJazeeraArticlesCard
            key={aljazeeraArticle.description}
            aljazeeraArticle={aljazeeraArticle}
            />
        )
    }))

    return (
        <div className="top-news m-2">
            <h3 className="text-uppercase headings text-center mt-5 mb-4">top CNN News</h3>
            <div className="row">
                {cnnArticlesList}
            </div>
            <h3 className="text-uppercase headings text-center mt-5 mb-4">top BBC News</h3>
            <div className="row">
                {bbcArticlesList}
            </div>
            <h3 className="text-uppercase headings text-center mt-5 mb-4">top Al-Jazeera English News</h3>
            <div className="row">
                {aljazeeraArticlesList}
            </div>
        </div>
    )
}

export default MainArticlesCard;