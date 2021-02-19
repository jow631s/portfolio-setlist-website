const express = require('express');
const router = express.Router();
const { db } = require('../lib/db');

router.get('/', async function(req, res) {
  const userResults = await db.query('SELECT * FROM users');
  console.log('***user results***', userResults.rows);
  res.render('pages/user-signup', {
    users: userResults.rows
  });
});

module.exports = router;