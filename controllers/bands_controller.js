const express = require('express');
const router = express.Router();
const { db } = require('../lib/db');

router.get('/band-select', function(req, res) {
  res.render('pages/bands/band-select');
});

module.exports = router;