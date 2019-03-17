const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotesSchema = new Schema({
    id: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true,
        default: 'Not Started'
    },
    userId: {
        type: String,
        require: true
    },
    createdOn: {
        type: Date,
        default: Date.now()
    },
    modifiedOn: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('notes', NotesSchema);