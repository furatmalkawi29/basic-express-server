'use strict';

/**
 * This function is a middleware tha accepts HTTP request and response,
 * it sends json object with request status 500 and 
 * a message with the error occured and a request path. 
 * 
 * @param {object} err HTTP request object
 * @param {object} req HTTP request object
 * @param {object} res HTTP response object
 * @param {function} next Function that calls the next middleware
 */
module.exports=(err, req, res, next) =>{
  res.status(500).json({
    status: 500,
    message: err.message,


  });
};