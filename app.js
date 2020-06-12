var express = require('express');
var todoController = require('./controller/todo-controller');

var app = express();

//Setting up the template engine

app.set('view engine', 'ejs');

//Static files and Express middleware
app.use(express.static('./public'));


//Firing controller
todoController(app);


//Listening to a port
app.listen(3000);
console.log('You are listening to port 3000');
