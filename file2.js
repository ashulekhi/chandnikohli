var file1 = require('./file1');


var express = require('express')

var server = express();





server.get('/' , function(req,res){

res.send('Hi Chandni how are you?')

})


server.get('/ashu' , function(req,res){

})



server.listen(10000);










console.log(file1.add(10,20) , 'this is the result');










