import express from 'express';
// const express = require('express');

import bodyParser from "body-parser"
// const bodyparser = bodyparser;

import usersRouter from './routes/users.js';

const app = express();
const port = 5000;
const ip = '0.0.0.0';

app.use(bodyParser.json());

app.use('/', usersRouter)

app.get('/hello', (req, res) => {
    // console.log('[Test]!');
    res.send('Hello How Are You')
})

app.listen(port, () => console.log(`Server Running on port: http://localhost:${port}`));
