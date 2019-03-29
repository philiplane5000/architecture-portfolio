const db = require('../models');

module.exports = {
    getAllProjects: (req, res) => {
        db.Project.find()
          .then(docs => {
            res.json(docs)
          })
          .catch(err => {
            res.json(err);
          })
      },
    createProject: (req, res) => {
    db.Project.create(req.body)
        .then(doc => {
        res.json(doc);
        })
        .catch(err => {
        res.json(err);
        })
    },
    deleteProject: (req, res) => {
    db.Project.deleteOne({id: req.params.id})
      .then(doc => {
        res.json(doc);
      })
      .catch(err => {
        res.json(err)
      })
    }
}