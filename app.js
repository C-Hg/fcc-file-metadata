var express = require('express');
var app = express();

// upload with multer
var multer  = require('multer');
var upload = multer({ dest: './uploads/' });

//enables CORS 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));

// middlewares
app.use('/public', express.static(process.cwd() + '/public'));

//home routing
app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
});

//importing routes
const filemetadata_route = require('./routes/file_metadata.route');

//api routing
app.use('/api/fileanalyse', filemetadata_route);

//configuring the listening port
var listener = app.listen(process.env.PORT || 3000, function () {
    console.log('File-metadata is listening on port ' + listener.address().port);
   });
 