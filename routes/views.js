var express = require('express');
var router = express.Router();
var projectsController = require('../controllers/projectController');
let projects = require('./mock-data/projects');

/* GET home page. */
router.get('/', projectsController.renderProjectsPage);

router.get('/projects', projectsController.renderProjectsPage);

router.get('/about', function(req, res, next) {
  res.render('about', projects);
});

router.get('/contact', function(req, res, next) {
  res.render('contact', projects);
});

module.exports = router;
