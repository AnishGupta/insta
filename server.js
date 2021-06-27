require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes/Blog');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://", {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    app.listen(process.env.PORT || 5000, () => {
        console.log("The Server is running at 5000")
    });
});
app.set('view engine','ejs');
app.set('views','public/html');

app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(express.static('public/static'));
app.use('/img',express.static('img'));
app.use(router);
