'use strict';

//setup 
require('dotenv').config();

//import 
require('./src/server.js').start(process.env.PORT);

//another way to import :
// const server = require('./server.js');
// const port = process.env.PORT || 3000 ;
// server.start(port);
