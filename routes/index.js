var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TreasuryPass' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'TreasuryPass' });
});

module.exports = router;
