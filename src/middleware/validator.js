'use strict';

module.exports = (req,res,next) =>{
  if( req.query.name ) { next(); } // Run the next middleware
  else { throw new Error('No name was specified');}

  /* next('No names found!'); } /* Run the error handler, skipping all 
  other middlewares*/
};