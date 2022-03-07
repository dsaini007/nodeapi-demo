var express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./DB');
const Route = require('./router/user.router');

mongoose.promise = global.promise;
mongoose.connect(db.db, { useNewUrlParser: true }).then(
        () => { console.log('Connection eastablished') })
    .catch((error) => { console.log(error) })

var app = express();
app.use(cors());
app.use(bodyparser.json());
app.use('/user', Route);




const port = process.env.PORT || 8081;



app.listen(port, () => {
    console.log('listening on port 8081');
})