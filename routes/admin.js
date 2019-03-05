var express = require('express');
var router = express.Router();
var projectsController = require('../controllers/projectController');

router.get('/', (req, res) => {
    res.render('admin');
})

module.exports = router;
