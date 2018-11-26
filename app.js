var express = require('express');
var app = express();

//enables CORS 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));

// middlewares
app.use(express.static('public'));

//configuring the listening port
var listener = app.listen(process.env.PORT || 3000, function () {
    console.log('File-metadata is listening on port ' + listener.address().port);
   });
 