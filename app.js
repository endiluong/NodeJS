const fs = require('fs');
const _ = require('lodash');
const yargs= require('yargs');

const notes = require('./mynode.js');

const argv=yargs.argv;


var command = argv._[0];
console.log('COMMAND: ', command);

switch (command) {
   case ('list'):
      notes.listAll();
      break;
   case ('add'):
      console.log('Add new: ');
      notes.addNote(argv.title, argv.body);
      break;
   case ('read'):
      notes.readNote(argv.title);
   break;
   case ('remove'):
      notes.removeNote(argv.title);
      break;
   default:
      console.log('Not found command');
      break;
}