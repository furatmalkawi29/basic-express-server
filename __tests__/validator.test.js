'use strict';

//import
let validator = require('../src/middleware/validator.js');


describe('middleware that checks query string, looking for name property',()=>{

  let request = {
    query: {name:'cookies'},
  };
  let response = {};
  let next = jest.fn();


  it ('should call next function without arguments when name property exists with a value', ()=> {
    
    validator(request,response,next);

    expect(next).toHaveBeenCalledWith();
  });

  it ('should thow error when request has the name property without a value', ()=> {
    
    request.query.name = null;
    
    validator(request,response,next);

    expect(next).toHaveBeenCalledWith('No names found!');
  });


  it ('should thow error when request query doesnt have name property', ()=> {
    request.query={};
    
    validator(request,response,next);

    expect(next).toHaveBeenCalledWith('No names found!');
  });


});