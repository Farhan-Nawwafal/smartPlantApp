const con = require('../config/databaseMySQL');

// const useDB = con.query('USE zorinosteam', (err) => {
//     if (err) {
//         console.log(`Gagal masuk ke database! : ${err.message}`);
//         return;
//     }
//     console.log('Berhasil masuk ke database!');
// });



module.exports = useDB;
