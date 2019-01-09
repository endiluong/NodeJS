// var obj ={
//    name: 'Andrew'
// };
// var stringObj= JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

const fs = require('fs');

var orgNote = {
   title: 'title',
   body: 'body'
};

var orgNoteString = JSON.stringify(orgNote);
fs.writeFileSync('notes.json', orgNoteString);

var noteString = fs.readFileSync('notes.json');
var notes = JSON.parse(noteString);
console.log(notes.title);