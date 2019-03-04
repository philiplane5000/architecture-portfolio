const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true
    },
    imageSrc: {
        type: Array,
    },
    about: {
        type: Array,
    }
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;