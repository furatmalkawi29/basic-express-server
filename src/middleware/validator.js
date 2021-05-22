'use strict';

/**
 * This function is a middleware tha accepts HTTP request and response,
 * and next method. It checks if there's a name
property in request's query and throws an error if not 
 * 
 * @param {object} err HTTP request object
 * @param {object} req HTTP request object
 * @param {object} res HTTP response object
 * @param {function} next Function that calls the next middleware
 */ 

module.exports = (req,res,next) =>{
  if( req.query.name ) { next(); } // Run the next middleware
  else { throw new Error('No name found');}

  /* next('No names found!'); } /* Run the error handler, skipping all 
  other middlewares*/
};