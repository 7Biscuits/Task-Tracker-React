const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: false,
        type: String
    },
    day: {
        required: false,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)