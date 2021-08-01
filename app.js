var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
const database = require('./config/database');
var fileUpload=require('express-fileupload');


app.use(cors());
// Config Router Grouping
// express.application.prefix = express.Router.prefix = function (path, configure) {
//     var router = express.Router();
//     this.use(path, router);
//     configure(router);
//     return router;
//   };


app.use(bodyParser.json());
app.use(fileUpload({
  limits: {
    fileSize: 10 * 1024 * 1024
  }
}));

app.use('/', require('./routes'));


app.listen(3001,(req,res)=>{

    console.log("your app is running on 3001 port");
});

