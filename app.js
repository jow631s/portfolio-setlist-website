const express = require('express');
const app = express();
const port = 3000;

//set view engine to EJS
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});