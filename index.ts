import app from './src/app'
import './src/database'
import express from "express";

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})

app.use(express.static('public'))
app.use(express.static('files'))