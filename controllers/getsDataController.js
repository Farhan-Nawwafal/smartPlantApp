const con = require('../config/databaseMySQL');

con.query('USE zorinosteam', (err) => {
    if (err) {
        console.log(`Gagal masuk ke database! : ${err.message}`);
        return;
    }
    console.log('Berhasil masuk ke database!');
});

export const getSuhuUdara  = (req, res) => {
    const query = `SELECT * FROM plant_values WHERE parameter_name='suhu_udara'`;
    con.query(query, (err, result) => {
        if (err) {
            console.log(`Error fecthing data : ${err}`);
            return res.status(500).json({ error : 'Database Error!'});
        }
        res.status(200).json(result);
    });
}

export const getKelembapanTanah = (req, res) => {
    const query = `SELECT * FROM plant_values WHERE parameter_name='kelembapan_tanah'`;
    con.query(query, (err, result) => {
        if (err) {
            console.log(`Error fecthing data : ${err.message}`);
            return res.status(500).json({ error : 'Database Error!'});
        }
        res.status(200).json(result);
    });
};

export const getPenyiramanAir = (req, res) => {
    const query = `SELECT * FROM plant_values WHERE parameter_name='penyiraman_air'`;
    con.query(query, (err, result) => {
        if (err) {
            console.log(`Error fecthing data : ${err.message}`);
            return res.status(500).json({ error : 'Database Error!'});
        }
        res.status(200).json(result);
    });
};
