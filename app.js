require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const { db } = require('./lib/db');

// Static Files
app.use(express.static('public'));

//set view engine to EJS and use EJS layouts
app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs');

//use body-parser to parse input data from forms

app.use(bodyParser.urlencoded({ extended: true }));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// users page
app.use('/users', require('./controllers/users_controller'));

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

//sign-up page
app.get('/user-signup', function(req, res) {
  res.render('pages/user-signup');
});

//sign-up success page
app.get('/signup-success', function(req, res) {
  res.render('pages/signup-success');
});

//create new user
app.use('/user-signup_controller', require('./controllers/users_controller'));


//testing
app.get('/test', function(req, res) {
  res.send('what does send do????')
});

console.log('===============================');
console.log(process.env.DB_USERNAME);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});