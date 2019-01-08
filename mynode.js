console.log('My Node');



var addNote = (title, body) => {
   console.log('Adding note', title, body);
};
var listAll = () => {
   console.log('List All Note');
};
var readNote=(title)=>{
   console.log('Read note title: ', title);
}
var removeNote=(title)=>{
   console.log('Remove note title: ', title);
}



module.exports = {
   addNote,
   listAll,
   readNote,
   removeNote,
}