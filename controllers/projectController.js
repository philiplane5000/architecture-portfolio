const db = require('../models');

module.exports = {
    renderProjectsPage: (req, res) => {
        db.Project
            .find()
            .then(projects => {
                res.render('home', {projects: projects})
            })
            .catch(err => {
                res.json(err)
            })
    },
    renderProjectById: (req, res) => {
        db.Project
            .findById(req.params.id)
            .then(project => {
                // res.json(project)
                res.render('project', {project: project})
            })
            .catch(err => {
                res.json(err)
            })
    }
}