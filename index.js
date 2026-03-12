const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json())


const db = mysql.createConnection({
    host: 'fixfis.dev',
    user: 'u15_qMncAfmd8P',
    password: 'xI!Xg.bo^MGGQr^jdraScZ^@',
    database: 's15_storeperu'
})

