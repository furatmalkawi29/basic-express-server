'use strict';

//setup 
const express = require('express');
const app = express();

//middlewares / custom
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

//middlewares / error-handlers
const pageNotFoundHandler = require('./error-handlers/404.js');
const errorHanlder = require('./error-handlers/500.js');

//body parsing middleware


//routs
app.get('/person', validator, personHandler);
app.get('/', homeHandler);



//routs handlers
function personHandler (req,res){
  res.json({
    name:req.query.name,
  }); 
}


function homeHandler (req,res){
  console.log('hello user');
}



//use 
app.use('*', pageNotFoundHandler);
app.use(logger);
app.use(validator);
app.use(errorHanlder);



//listening/start
function start(port) {
  app.listen(port, () => {
    console.log(`Listening on PORT ${port}`);
  });
}


//export
module.exports = {
  app: app,
  start: start,
};