var express = require('express');
var router = express.Router();
var projectController = require('../controllers/projectController');
var db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.Project.find()
    .then(docs => {
      res.json(docs)
    })
    .catch(err => {
      console.log(err);
    })
});

router.post('/', projectController.createProject)

module.exports = router;
