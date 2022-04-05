const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
    },
    phoneImage: {
        type: String,
        required: true
    },
    classType: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    snippet: {
        type: String, 
        required: true,
    },
    display: {
        type: String, 
        required: true,
    },
    dimensions: {
        type: String, 
        required: true,
    },
    color: {
        type: String, 
        required: true,
    },
    cpu: {
        type: String, 
        required: true,
    },
    gpu: {
        type: String, 
        required: true,
    },
    ram: {
        type: String, 
        required: true,
    },
    rom: {
        type: String, 
        required: true,
    },
    camera: {
        type: String, 
        required: true,
    },
    battery: {
        type: String, 
        required: true,
    },
    securitySensor: {
        type: String, 
        required: true,
    },
    features: {
        type: String, 
        required: true,
    },
    sim: {
        type: String, 
        required: true,
    },
    bluetooth: {
        type: String, 
        required: true,
    },
    price: {
        type: String, 
        required: true,
    },
    body: {
        type: String, 
        required: true,
    }, 
}, {timestamps: true});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
