const { Router } = require('express');

const router = Router();
const { rootGet, createNewNote } = require('../controllers/notes.controllers');//desestructción

/* Peticiones GET en la raíz / */
router.get('/', rootGet)//Endpoint
router.post('/notes/create', createNewNote)

module.exports = router;