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


  it ('should thow error when request query doesnt have name property', ()=> {
    request.query={};
    expect(() => validator(request, response, next)).toThrow('No name found');
  });

});