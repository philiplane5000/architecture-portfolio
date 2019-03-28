var express = require('express');
var router = express.Router();
var projectsController = require('../controllers/projectController');

/* RENDER HOME PAGE WITH ALL PROJECTS DATA. */
router.get('/', projectsController.renderProjectsPage);

/* RENDER HOME PAGE WITH ALL PROJECTS DATA. */
router.get('/projects', projectsController.renderProjectsPage);

/* RENDER SINGLE PROJECT PAGE BY ID */
router.get('/project/:id', projectsController.renderProjectById);

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/writing', function(req, res) {
  res.render('writing');
});

module.exports = router;
