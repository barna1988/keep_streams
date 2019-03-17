const router = require('express').Router();
const notesController = require('./notes.controller');

//addNotes
router.post('/', (req, res) => {
    notesController.addNotes().then((response) => {
        res.status(response.status).send(response);
    }).catch((error) => {
        res.status(error.status).send(error);
    });
});

//getNotes
router.get('/', (req, res) => {
    notesController.getNotes().then((response) => {
        res.status(response.status).send(response);
    }).catch((error) => {
        res.status(error.status).send(error);
    });
});

module.exports = router;