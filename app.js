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
