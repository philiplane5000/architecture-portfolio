var express = require('express');
var router = express.Router();
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

router.post('/', function(req, res, next) {
  db.Project.create(req.body)
    .then(doc => {
      res.json(doc);
    })
    .catch(err => {
      console.log(err);
    })
})

module.exports = router;
