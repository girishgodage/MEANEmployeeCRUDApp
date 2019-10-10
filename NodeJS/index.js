const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');

const PORT = process.env.PORT || 8080;

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/employees', employeeController);

app.use(express.static(path.join(__dirname,'public')));

app.get('*',(req,res)=>{
    res.sendfile(path.join(__dirname,'public/index.html'));
})

app.listen(PORT, () => console.log('Server started at port :'+ PORT));


