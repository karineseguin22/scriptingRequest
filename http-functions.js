

  var https = require('https'); 
  var buffer = ''; 
 function printHTML (html) {
    console.log(html);
   }

function getHTML (options, callback) {

    /* Add your code here */
   
    https.get(options, function (response) {

        //set coding to utf8 
        response.setEncoding('utf8')

        //invoke callback when data received
        response.on('data', function(data){
            console.log('Received data'); 
            buffer += data;
            
        }); 

        //callback is invoked when all of the data has been received
        //the 'end' of the stream
        response.on('end', function() {
            console.log('Response stream complete.')
            //console.log(buffer); 
            callback(buffer); 
        }); 
    });
  
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

  getHTML(requestOptions, printHTML); 

 module.exports = function getHTML (options, callback) {
     /* Add your code here */
   
    https.get(options, function (response) {

        //set coding to utf8 
        response.setEncoding('utf8')

        //invoke callback when data received
        response.on('data', function(data){
            console.log('Received data'); 
            buffer += data;
            
        }); 

        //callback is invoked when all of the data has been received
        //the 'end' of the stream
        response.on('end', function() {
            console.log('Response stream complete.')
            //console.log(buffer); 
            callback(buffer); 
        }); 
    });
    
 };