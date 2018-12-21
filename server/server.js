const express = require('express');
const morgan = require('morgan');


const app = express();

//setup logging
app.use(morgan('dev'));

let port = 5002;
const server = app.listen(port, ()=> console.log('Server running on port: ' + server.address().port));
