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
}