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

//use 
app.use(logger);

//routs
app.get('/person', validator, personHandler);
app.get('/', homeHandler);



//routs handlers

/**
 * This function accepts HTTP request object and HTTP response object,
 * it handles rout (/person) . It sends person name as json object .
 * 
 * @param {object} req HTTP request object
 * @param {object} res HTTP response object
 */
function personHandler (req,res){
  res.json({
    name:req.query.name,
  }); 
}


/**
 * This function accepts HTTP request object and HTTP response object,
 * it handles rout (/) . It sends back a welcoming
 * messege as a response 
 * 
 * 
 * @param {object} req HTTP request object
 * @param {object} res HTTP response object
 */
function homeHandler (req,res){
  res.send('hello user');
}



//use 
app.use(errorHanlder);
app.use('*', pageNotFoundHandler);




//listening/start

/**
 * This function accepts the port number, then use it to call 
 * listen function . It makes the server start 
 * listening to upcoming requests .
 * 
 * @param {number} port Server's port
 */

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