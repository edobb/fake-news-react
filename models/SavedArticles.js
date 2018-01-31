'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SavedArticlesSchema = new Schema({
    headline: [{
        description: String
    }],
    web_url: [{
        description: String
    }],
    pub_date: [{
        description: String
    }]
});

const SavedArticles = mongoose.model('SavedArticles', SavedArticlesSchema);
module.exports = SavedArticles;