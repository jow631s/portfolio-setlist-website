const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// Static Files
app.use(express.static('public'));

//set view engine to EJS and use EJS layouts
app.use(expressLayouts)
app.set('layout', './layouts/full-width')
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