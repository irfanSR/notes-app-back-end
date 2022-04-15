// const {addNoteHandler} = require('./handler')
// const {getAllNotesHandler} = require('./handler')
const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler
} = require('./handler');


const routes = [

  {

    path: '/notes',

    method: 'POST',

    handler: addNoteHandler,

  },
  // Get All Notes
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  // GET Specified Notes by Id
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },

  // EDit data Specified Note By Id
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },

  // Delete data by id
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },



];

module.exports = routes;
