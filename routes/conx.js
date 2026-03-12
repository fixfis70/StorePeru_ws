const mysql = require("mysql2");

const conx = mysql.createConnection({
    host: 'fixfis.dev',
    user: 'u15_qMncAfmd8P',
    password: 'xI!Xg.bo^MGGQr^jdraScZ^@',
    database: 's15_storeperu'
})
conx.connect((err) => {
    if (err) {
        console.error('Error de conexión:', err);
        return;
    }
    console.log('Conectado a MySQL');
});

module.exports = conx