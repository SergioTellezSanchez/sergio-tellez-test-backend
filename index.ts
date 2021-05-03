import app from './src/app'
import './src/database'
import express from "express";

const path = require('path');

app.use(express.static('public'))
app.use(express.static('files'))

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})
;