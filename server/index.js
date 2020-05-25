const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const axios = require('axios');
const port = 3005;
// const db = require('../database/index');

const Controller = require('./controller');
app.use(bodyParser.json({type: 'application/json'}));

app.get('/mainInfoData', (req, res) => {
    // console.log('hello from mainfodata')
    Controller.getMainInfo(req, res)
})

app.post('/user/login', (req, res) => {
    Controller.userLogin(req, res);
    // console.log(req.body)
})

app.post('/user/register', (req, res) => {
    Controller.userRegister(req, res);
})

app.listen(port, () => {
    console.log(`connected to port ${port}`)
});