const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));
app.use(express.static('data'));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.get('/', function(req, res) {
  res.render('index');
});
app.get('/about', function(req, res) {
  res.render('about');
});
app.get('/contact', function(req, res) {
  res.render('contact');
});

app.listen(port);

console.log("Webserver draait");


// Inladen online json file
var request = require('request');
  var data;
  request('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek4/MapServer/293/query?where=1%3D1&outFields=*&outSR=4326&f=json',
    function(error, response, body){
      data = JSON.parse(body);

      for(var i=0; i < data.features.length; i++) {
          /*console.log("naam: " + data.features[i].attributes.naam);
          console.log("coord: " + data.features[i].geometry.x + ", " + data.features[i].geometry.y);
          console.log("");*/
          console.log(data.features[i].attributes);
      }
    }
  );

  app.get('/', function(req, res){
    res.render('cultuur', {
      culturespots: data
    });
  });
