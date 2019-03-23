const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const mongoose = require('./db/mongoose');

var cors = require('cors')

const port = 3000;

const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var router = require('./routes/routes')(app);

app.listen(port, function () {
    console.log("Server running on localhost:", port);
});