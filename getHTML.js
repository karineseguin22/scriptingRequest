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
            callback(buffer); 
        }); 
    });
  
  }
  
  var requestOptions = function (Host, Path, callback) {
      getHTML({
    host: Host,
    path: Path }, callback) 
  };

  requestOptions('sytantris.github.io', '/http-examples/step4.html', printHTML);
  //printHTML(); 

  //host: 'sytantris.github.io'
  //path: '/http-examples/step3.html'