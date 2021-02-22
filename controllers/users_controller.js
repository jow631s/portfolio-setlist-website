const express = require('express');
const router = express.Router();
const { db } = require('../lib/db');

router.get('/', async function(req, res) {
  const userResults = await db.query('SELECT * FROM users');
  console.log('***user results***', userResults.rows);
  res.render('pages/users', {
    users: userResults.rows
  });
});

router.post('/createNewUser', function (req, res, next) {
  const { signupEmail, requestedUsername, userFirstNameInput, userLastNameInput, userAddress1, userAddress2, userCity, userState, userZipCode, userPhoneNumber } = req.body;
  const text = 'INSERT INTO users(email, username, first_name, last_name, address_1, address_2, city, state, zip, phone) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
  const values = [signupEmail, requestedUsername, userFirstNameInput, userLastNameInput, userAddress1, userAddress2, userCity, userState, userZipCode, userPhoneNumber];
  db.query(text, values, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows);
    }
  })
  console.log(req.body);
  res.redirect('/signup-success');
});

module.exports = router;