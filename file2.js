var file1 = require('./file1');


var express = require('express')

var server = express();


console.log("path curretn" , __dirname);

server.use(express.static(__dirname + '/frontend'))




server.get('/' , function(req,res){







	console.log(">>>>>>>>>>>>>> reached based route ")

res.render('index.html')

})


server.get('/ashu' , function(req,res){

})



server.listen(10000);










console.log(file1.add(10,20) , 'this is the result');










