const con = require('../config/databaseMySQL');

con.query('USE zorinosteam', (err) => {
    if (err) {
        console.log(`Gagal masuk ke database! : ${err.message}`);
        return;
    }
    console.log('Berhasil masuk ke database!');
});

exports.postSuhuUdara  = (req, res) => {
    const { value } = req.body;
    if (!value) {
        return res.status(400).json({
            status: "false",
            message: "Data tidak ditemukan!",
        })
    }

    const query = `INSERT INTO plant_values(parameter_name, value) VALUES ('suhu_udara', ?)`;
    con.query(query, [value] ,(err, result) => {
        if (err) {
            console.log(`Error fecthing data : ${err}`);
            return res.status(500).json(
                {
                    status: false,
                    message: "Gagal mengirim data!",
                }
            );
        }
        res.status(200).json(
            {
                status: true,
                data: {
                    parameter_name: "suhu_udara",
                    valueData: value,
                    start_date: new Date().toLocaleDateString(), 
                    end_date: new Date().toLocaleDateString(),
                },
                message: "Data berhasil dikirim!",
              }
        );
    });
};

exports.postKelembapanTanah = (req, res) => {
    const { value } = req.body;
    if (!value) {
        return res.status(400).json({
            status: "false",
            message: "Data tidak ditemukan!",
        })
    }

    const query = `INSERT INTO plant_values(parameter_name, value) VALUES ('kelembapan_tanah', ?)`;
    con.query(query, [value] ,(err, result) => {
        if (err) {
            console.log(`Error fecthing data : ${err}`);
            return res.status(500).json(
                {
                    status: false,
                    message: "Gagal mengirim data!",
                }
            );
        }
        res.status(200).json(
            {
                status: true,
                data: {
                    parameter_name: "kelembapan_tanah",
                    valueData: value,
                    start_date: new Date().toLocaleDateString(), 
                    end_date: new Date().toLocaleDateString(),
                },
                message: "Data berhasil dikirim!",
              }
        );
    });
};

exports.postPenyiramanAir = (req, res) => {
    const { value } = req.body;
    if (!value) {
        return res.status(400).json({
            status: "false",
            message: "Data tidak ditemukan!",
        })
    }

    const query = `INSERT INTO plant_values(parameter_name, value) VALUES ('penyiraman_air', ?)`;
    con.query(query, [value] ,(err, result) => {
        if (err) {
            console.log(`Error fecthing data : ${err}`);
            return res.status(500).json(
                {
                    status: false,
                    message: "Gagal mengirim data!",
                }
            );
        }
        res.status(200).json(
            {
                status: true,
                data: {
                    parameter_name: "penyiraman_air",
                    valueData: value,
                    start_date: new Date().toLocaleDateString(), 
                    end_date: new Date().toLocaleDateString(),
                },
                message: "Data berhasil dikirim!",
              }
        );
    });
};
