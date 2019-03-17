const notesModule = require('./notes.entity');
const dbConfig = require('../../../config').appConfig.dbConfig;
const uuidv1 = require('uuid/v1');
const streamToMongoDB = require('stream-to-mongo-db');
const path = require('path');
const fs = require('fs');
const { Transform } = require('stream');
const JSONStream = require('JSONStream');
const notesFile = path.resolve(__dirname, '../../../', 'reference_notes.json');

const notesTransform = new Transform({
    readableObjectMode: true,
    writableObjectMode: true,
    transform(note, encoding, done) {

        let noteAdd = new notesModule();
        noteAdd.id = uuidv1();
        noteAdd.title = note.title;
        noteAdd.text = note.text;
        noteAdd.userId = note.userId;

        this.push(noteAdd);
        done();
    }
});

const addNotes = () => {
    return new Promise((resolve, reject) => {
        const addDB = {dbURL: dbConfig.mongoUrl, collection: "notes"};
        const notesWriteStream = streamToMongoDB.streamToMongoDB(addDB);
        const notesReadSteam = fs.createReadStream(notesFile, 'utf-8').pipe(JSONStream.parse('*'));
        const notesAddStream = notesReadSteam.pipe(notesTransform).pipe(notesWriteStream);
        notesAddStream.on('finish', () => resolve({message: 'Notes added', status: 201}))
        .on('error', (error) => reject({message: error.message, status: 500}));
    });
};

const getNotes = () => {
    return new Promise((resolve, reject) => {
        let notesReadSteam = fs.createReadStream(notesFile, 'utf-8').pipe(JSONStream.parse('*'));
        let readResult = [];
        notesReadSteam.on('data', (data) => readResult.push(data))
        .on('end', () => resolve({message: 'Notes read', status: 200, notes: readResult}))
        .on('error', () => reject({message: error.message, status: 500}));
    });
};

module.exports = {
    addNotes,
    getNotes
}












