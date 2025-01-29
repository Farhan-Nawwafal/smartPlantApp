const mysql = require('mysql');
require('dotenv').config();
const con = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    port: process.env.PORT || '3306'
});

con.connect((err) => {
    if (err) {
        console.log(`Gagal koneksi ke Database ${err.message}`);
        process.exit(1);
    }
    console.log('Berhasil terkoneksi ke Database!');
});

module.exports = con;