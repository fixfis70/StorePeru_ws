const mysql = require("mysql2");

const conx = mysql.createConnection({
    host: 'fixfis.dev',
    user: 'u17_YZuzw7ul1j',
    password: 'i@+cZLeH=^CJXV!Vsa!68vta',
    database: 's17_storeperu'
})
conx.connect((err) => {
    if (err) {
        console.error('Error de conexión:', err);
        return;
    }
    console.log('Conectado a MySQL exitosamente');
});

module.exports = conx