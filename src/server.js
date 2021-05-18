'use strict';

//setup 
const express = require('express');
const app = express();

//middlewares
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const pageNotFoundHandler = require('./error-handlers/404.js');
const errorHanlder = require('./error-handlers/500.js');



//routs
app.get('/person', validator, personHandler);
app.get('/', homeHandler);



//handlers
function personHandler (req,res){
  res.json({
    name:req.query.name,
  }); 

}

function homeHandler (req,res){
  console.log('ok');
}



//use 
app.use(logger);
app.use(validator);
app.use('*', pageNotFoundHandler);
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