const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    imgSrc: {
        type: String,
    },
    caption: {
        type: String,
    }
})

const aboutSchema = new mongoose.Schema({
    paragraph: {
        type: String
    }
})

const detailSchema = new mongoose.Schema({
    detail: {
        type: String
    }
})

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true
    },
    images: [imageSchema],
    about: [aboutSchema],
    details: [detailSchema]
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;