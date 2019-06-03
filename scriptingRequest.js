//require https
var https = require('https'); 

//created new function to print in chunks 
var getAndPrintHTMLChuncks = function (){
    
    var requestOptions = {
        host:'syntantris.github.io',
        path: '/http-examples/step1.html'
    }; 

    https.get(requestOptions, function (response) {

        //set coding to utf8 
        response.setEncoding('utf8')

        //invoke callback when data received
        response.on('data', function(data){
            console.log('Chunck Received. Length: ' , data.length);
            console.log(data, "\n"); 
        }); 

        //callback is invoked when all of the data has been received
        //the 'end' of the stream
        response.on('end', function() {
            console.log('Response stream complete.')
        }); 
    });

}

getAndPrintHTMLChuncks(); 