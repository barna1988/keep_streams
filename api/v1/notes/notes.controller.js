const notesService = require('./notes.service');

//addNotes
const addNotes = () => {
    return notesService.addNotes();
}

//getNotes
const getNotes = () => {
    return notesService.getNotes();
}

module.exports = {
    addNotes,
    getNotes
}