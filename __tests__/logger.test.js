'use strict';


//import
let logger = require('../src/middleware/logger.js');

describe('http requests logger middleware', ()=>{

  //arrange
  let consoleSpy;

  //no real request to call the logger middleware 
  // we create logger parameters and pass them 
  const request ={
    method:'get',
    path: 'mytest',
  };

  const response = {};
  const next = jest.fn(); //calls an empty function

  // run before test
  beforeEach(()=>{
    // used cause server cant access console log output
    consoleSpy=jest.spyOn(console,'log');
  });

  //run after test
  afterEach(()=>{
    //reset everything to what was before mocking test
    consoleSpy.mockRestore();
  });

  it ('should outputs request path and method in a string in console log ' , ()=> {
    //call middleware
    logger(request,response,next);

    //check calling the log with these values
    expect(consoleSpy).toHaveBeenCalledWith('request info :',request.method,request.path);
    //check if next is called
    //if called means no errors in logger and it run next middleware
    expect(next).toHaveBeenCalledWith();
  });


});
