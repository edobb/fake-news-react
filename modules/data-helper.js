'use strict';

// Useful for writing
function stringToDocument(taskDescription) {
    return {
        description: taskDescription
    };
}

function documentToString(taskObj) {
    return taskObj.description;
}

// Useful for first read
function getSavedArticles() {
    return {
        articles: []
    };
}

function buildSavedArticleData(document) {
    return {
        id: document.data._id,
        headline: document.data.headline.map(dataHelper.documentToString),
        web_url: document.data.web_url.map(dataHelper.documentToString),
        pub_date: document.data.pub_date.map(dataHelper.documentToString)
    };
}

module.exports = {
    buildSavedArticleData: buildSavedArticleData,
    documentToString: documentToString,
    getSavedArticles: getSavedArticles,
    stringToDocument: stringToDocument
}