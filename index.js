var fs =require("fs");
var http= require('http');
var options =
{
	host:'ec2-52-32-239-80.us-west-2.compute.amazonaws.com',
	port:8080,
	method: 'GET'
};

var data = fs.readFileSync('public/index.html');


