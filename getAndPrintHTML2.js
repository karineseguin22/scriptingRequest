var https = require('https'); 

function getAndPrintHTML (options) {

    /* Add your code here */
    var buffer = ''; 
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
            console.log(buffer); 
        }); 
    });
  
  }
  
  var requestOptions = function (Host, Path) {
      getAndPrintHTML({
    host: Host,
    path: Path }) 
  };

  requestOptions('sytantris.github.io', '/http-examples/step3.html');

  //host: 'sytantris.github.io'
  //path: '/http-examples/step3.html'