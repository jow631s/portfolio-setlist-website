const express = require('express');
const router = express.Router();
const { db } = require('../lib/db');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.get('/', async function (req, res) {
  const userResults = await db.query('SELECT * FROM users');
  console.log('***user results***', userResults.rows);
  res.render('pages/users/users', {
    users: userResults.rows
  });
});

router.post('/createNewUser', async function (req, res) {
  console.log(`the request body is ${req.body}`)
  const { signupEmail, requestedUsername, requestedPassword, userFirstNameInput, userLastNameInput, userAddress1, userAddress2, userCity, userState, userZipCode, userPhoneNumber } = req.body;
  let hashedPassword = await bcrypt.hash(requestedPassword, saltRounds);
  console.log(hashedPassword);
  const text = 'INSERT INTO users(email, username, hashed_password, first_name, last_name, address_1, address_2, city, state, zip, phone) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';
  const values = [signupEmail, requestedUsername, hashedPassword, userFirstNameInput, userLastNameInput, userAddress1, userAddress2, userCity, userState, userZipCode, userPhoneNumber];
  db.query(text, values, (err, response) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(response.rows);
    }
  })
  console.log(req.body);
  res.redirect('/users/signup-success');
});

router.post('/authenticate', async function (req, res) {
  const { username, password } = req.body;
  const text = 'SELECT hashed_password FROM users WHERE username = $1';
  const values = [username];
  try {
    const response = await db.query(text, values);
    let hashedPassword = response.rows[0].hashed_password;
    const match = await bcrypt.compare(password, hashedPassword);
    if (!match) {
      res.status(401).send('Bad password');
    } else {
      res.redirect('/bands/band-select');
    }
  } catch (err) {
    console.log(err.stack);
  }
});

router.get('/signup', function (req, res) {
  res.render('pages/users/user-signup');
});

router.get('/signup-success', function (req, res) {
  res.render('pages/users/signup-success');
});

router.get('/sign-in', function (req, res) {
  res.render('pages/users/user-sign-in');
})

router.get('/username-availability', async function (req, res) {
  const newUser = req.query.user;
  console.log(newUser);
  const existingUsernameResults = await db.query('SELECT username FROM USERS');
  const existingUsernames = existingUsernameResults.rows;
  const arrayOfUsernames = [];
  for (let listing of existingUsernames) {
    arrayOfUsernames.push(listing.username);
  }
  for (let name of arrayOfUsernames) {
    name = name.toLowerCase();
    if (name === newUser.toLowerCase()) {
      console.log('Unavailable');
      return 'Unavailable';
    }
  }
  console.log('Available');
  return 'Available';
})


module.exports = router;