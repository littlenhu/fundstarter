	var http = require("http");
 	var fs =require("fs");
 	// calling the readFile function
 	fs.readFile('index.html',function (err, data)
 	{

 		if(err)
 		{
 			console.log("File was not read properly.\n");
 		}
       		
 		//web server object
		http.createServer(function (request, response) 
		{
 			response.writeHead(200, {'Content-Type': 'text/html'});
 			response.write(data);
			response.end();
 		}).listen(8080);
	});
