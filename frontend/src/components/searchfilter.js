import React from 'react';


const filterArticles= (articles, query) => {
    if (!query) {
        return articles;
    }

    return articles.filter((articles) => {
        const articlesTitle = articles.title.toLowerCase();
        return articlesTitle.includes(query);
    });
};

export default filterArticles;