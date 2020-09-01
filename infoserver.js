var express = require('express');
var app = express();

const fs = require('fs');

//API Call to fetch User List
var API_USER_URL = '/api/moreinfo';

//Code snippet to allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Restful Service to fetch user list
app.get(API_USER_URL, function (req, res) {
  fs.readFile( __dirname + "/server/data/" + "moreinfo.json", 'utf8', function (err, data) {
    //  console.log('Send data is '+data );
     res.send( data );
  });
})


app.listen(4200, function () {
  console.log('Example app listening on port 4200!');
});