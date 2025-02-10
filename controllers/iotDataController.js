const con = require('../config/databaseMySQL');

con.query('USE zorinosteam', (err) => {
    if (err) {
        console.log(`Gagal masuk ke database! : ${err.message}`);
        return;
    }
    console.log('Berhasil masuk ke database!');
});

exports.getSensorData = (req, res) => {
    const { moisture, timestamp } = req.body;

    if(!moisture) return res.status(400).json(
        {
            status: false,
            message: "Data moisture tidak ada!",
        },
    );

    let status = "OFF";
    if (moisture > 700 ) status = "ON";
    
    const sql = "INSERT INTO watering_logs (moisture, status, timestamp) VALUES(?, ?, ?)";
    con.query(sql, [moisture, status, timestamp], (err) => {
        if (err) {
            console.log(err);
            return res.status(400).json(
                {
                    status: false,
                    message: "Database Error!",
                },
            );
        }
        res.json({ status }); // Kirim status ke IoT
    });
};

exports.postStatusData = (req, res) => {
    const sql = "SELECT status FROM watering_logs WHERE id=1 LIMIT 1";
    con.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(400).json(
                {
                    status: false,
                    message: "Database Error!",
                },
            );
        }
        res.json({ status: results.length > 0 ? results[0].status : "OFF" }); // Kirim status ke IoT
    });
};

exports.postPenyiraman = (req, res) => {
    const { value, status, timestamp } = req.body;
    
    const sql = "INSERT INTO watering_logs (moisture, status, timestamp) VALUES (?, ?, ?, ?)";
    con.query(sql, [null, status, timestamp] , (err) => {
        if (err) {
            console.log(err);
            return res.status(400).json(
                {
                    status: false,
                    message: "Database Error!",
                },
            );
        }
        res.json({
            status: true,
            data: {
                parameter_name: "kelembapan_tanah",
                valueData: value,
                start_date: new Date().toLocaleDateString(), 
                end_date: new Date().toLocaleDateString(),
            },
            message: "Data berhasil dikirim!",
          }); // Kirim status ke IoT
    });
};