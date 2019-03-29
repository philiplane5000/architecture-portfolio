var express = require('express');
var router = express.Router();
var apiController = require('../controllers/apiController');

/* GET users listing. */
router.get('/', apiController.getAllProjects)

router.post('/', apiController.createProject)

router.delete('/:id', apiController.deleteProject)

module.exports = router;
