var express = require('express');
var router = express.Router();
let projects = require('./mock-data/projects');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', projects);
});

router.get('/projects', function(req, res, next) {
  res.render('home', projects);
})

router.get('/about', function(req, res, next) {
  res.render('about', projects);
});

router.get('/contact', function(req, res, next) {
  res.render('contact', projects);
});

module.exports = router;
