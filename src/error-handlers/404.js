'use strict';
/**
 * This function accepts HTTP request and response,
 * it sends json object with request status 404 and 
 * a message that page isnt found . 
 * 
 * @param {object} req HTTP request object
 * @param {object} res HTTP response object
 * @param {function} next Function that calls the next middleware

 */

module.exports = (req, res, next) => {
  res.status(404).json({
    status: 404,
    message: 'Page Not Found',
  });
};