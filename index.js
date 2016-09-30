        var http = require("http");
        var fs =require("fs");
        // opening the file. with 'r' meaning the file is reading only 
        fs.open('index.html','r',function(err,data)
        {

                if(err)
                {
                        console.log("File was not open properly.\n");
                }

                console.log("File was open successfully.\n");
                // checking the file
                fs.stat('index.html',function(err,status)
                {
                        if(err)
                        {
                           console.log("File does not exist not.\n");     
                        }
                        // storing size of the file
                        var file_size =status["size"];
                        // creating buffer array
                        var buffer= new Buffer(file_size);
                        // verifed that the file does exist
                        console.log("Does file exist:" + status.isFile());
                        //if file exists then read it in
                        fs.read(data,buffer,0,buffer.length,0,function(err,bytesRead,bytes)
                         {
                                 if(err)
                                {
                                         console.log("Problems writing to buffer.\n");

                                }
                        
                                // launch http and display the buffer 
                                 http.createServer(function (request, response)
                                {
                                        response.writeHead(200, {'Content-Type': 'text/html'});
                                        response.write(bytes);
                                        response.end();
                                }).listen(8080);
                         });
                });
        });
