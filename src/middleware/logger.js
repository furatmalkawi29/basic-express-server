'use strict';

/**
 * This function is a middleware tha accepts HTTP request and response,
 * and next method. It console logs request's path 
and method .  
 * 
 * @param {object} err HTTP request object
 * @param {object} req HTTP request object
 * @param {object} res HTTP response object
 * @param {function} next Function that calls the next middleware
 */ 

module.exports = (req, res, next) => {
  console.log('request info :', req.method, req.path);
  next();
};

