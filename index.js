const express = require('express');

const mongoose = require('mongoose');
const urlRouter = require('./routes/url');
const {connectMangoDb} = require('./connection');

const PORT =8000;

const app = express();

app.use(express.json());

connectMangoDb('mongodb+srv://akshay:1234@project-cluster-1.mygct.mongodb.net/shortUrl-Db?retryWrites=true&w=majority'
).then(()=>console.log("MongoDb connected!"));


app.use('/',urlRouter);

app.listen(PORT,()=>console.log("Server Started at",`${PORT}`))

