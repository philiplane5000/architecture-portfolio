const db = require('../models');

module.exports = {
    renderProjectsPage: (req, res) => {
        db.Project
            .find()
            .then(projects => {

                console.log(projects[0].imageSrc)
                // console.log(projects.about);
                res.render('home', {projects: projects})
            })
            .catch(err => {
                console.log(err)
            })
    }
}