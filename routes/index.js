var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Desmond During\'s Portfolio' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Desmond During\'s Portfolio' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET about page. */
router.get('/aboutme', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/* GET contact page. */
router.get('/contactme', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

module.exports = router;
