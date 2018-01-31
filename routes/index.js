var express = require('express');
var router = express.Router();

const dbHelper = require('../modules/db-helper');

router.get('/saved-articles', function(request, response) {
  dbHelper.getTodoList(function (error, data){
    if(error) {
      response.status(400).end();
    } else {
      response.json(data);
    }
  });
});

router.post('/saved-articles', function (request, response) {
  dbHelper.createArticleData(request.body, function(error, data) {
    if(error) {
      console.log('An error occured while writing the todo list', error);
      response.status(400).end('Unable to create data');
    } else {
      response.json(data);
    }
  });
});

module.exports = router;
