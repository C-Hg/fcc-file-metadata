const express = require('express');
const router = express.Router();
const file_metadata = require('../controllers/file_metadata.controller');

// upload with multer
var multer  = require('multer');
var upload = multer({ dest: './uploads/' });

//upload.single('upfile') : 'upfile' is the name of the input field of type 'file' in index.html 
router.post('/', upload.single('upfile'), file_metadata.retrieve_metadata);

module.exports = router;