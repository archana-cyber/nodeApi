var express = require('express');
var app = express();

const router =express.Router();
const test=require("../controllers/TestController");

router.get('/index',test.index);
router.post('/create',test.create);
router.get('/show/:user_id',test.show);
router.patch('/update/:user_id',test.update);
router.delete('/delete/:user_id',test.delete);
router.post('/upload-image',test.uploadMultipartData);




module.exports=router;