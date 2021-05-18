'use strict';

module.exports= (req,res,next) =>{
  if( req.query.name ) { next(); } // Run the next middleware
  else { next('invalid name!'); } // Run the error handler, skipping all other middleware
};