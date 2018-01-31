'use strict';

const db = require('./db');
const dataHelper = require('./data-helper');

function getSavedArticles(callback) {
    db.SavedArticles.findOne({}, function (error, document) {
        if (error) {
            callback(error);
        } else {
            const savedArticleData = document === null
                ? dataHelper.getSavedArticles()
                : dataHelper.buildSavedArticleData(document);

            callback(error, savedArticleData);
        }
    });
}

function createArticleData(data, callback) {
    console.log(data);
    db.SavedArticles.create(data, callback);

}

function createArticleList(data, callback) {
    const documentData = {
        articles: data.article.map(dataHelper.stringToDocument)
       }
};

module.exports = {
    getSavedArticles: getSavedArticles,
    createArticleList: createArticleList,
    createArticleData: createArticleData
};