const notesDao = require('./notes.dao');

//addNotes
const addNotes = () => {
    return notesDao.addNotes();
}

//getNotes
const getNotes = () => {
    return notesDao.getNotes();
}

module.exports = {
    addNotes,
    getNotes
}