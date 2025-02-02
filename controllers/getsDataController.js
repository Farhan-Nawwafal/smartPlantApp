const con = require("../config/databaseMySQL");
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

con.query("USE zorinosteam", (err) => {
  if (err) {
    console.log(`Gagal masuk ke database! : ${err.message}`);
    return;
  }
  console.log("Berhasil masuk ke database!");
});

exports.getAllDatas = (req, res) => {
  const query = `SELECT 
  suhu_udara.parameter_name AS parameter_suhu, 
  suhu_udara.value AS suhu_terbaru,
  kelembapan_tanah.parameter_name AS parameter_kelembapan, 
  kelembapan_tanah.value AS kelembapan_terbaru,
  COALESCE(penyiraman.jumlah_penyiraman, 0) AS jumlah_penyiraman
FROM 
  (SELECT parameter_name, value 
   FROM plant_values 
   WHERE id = (SELECT MAX(id) FROM plant_values WHERE parameter_name = 'suhu_udara')
  ) AS suhu_udara
JOIN 
  (SELECT parameter_name, value 
   FROM plant_values 
   WHERE id = (SELECT MAX(id) FROM plant_values WHERE parameter_name = 'kelembapan_tanah')
  ) AS kelembapan_tanah
LEFT JOIN 
  (SELECT COUNT(*) AS jumlah_penyiraman 
   FROM plant_values 
   WHERE parameter_name = 'penyiraman_air'
     AND DATE(timestamp) = CURDATE()
  ) AS penyiraman 
ON 1=1;
`;
  con.query(query, (err, results) => {
    if (err) {
      console.log(`Error fecthing data : ${err.message}`);
      return res.status(500).json({
        status: false,
        message: "Gagal menangkap data!",
      });
    }

    // // Jika data kosong, kirimkan response dengan status kosong
    if (results.length === 0) {
      return res.render("dashboard", {
        layout: "layouts/main",
        datas: null, // Memberikan data null jika kosong
        title: "Halaman Dashboard",
        halaman: "dashboard",
      });
    }

    // res.status(200).json(results);
    res.render("dashboard", {
      layout: "layouts/main",
      datas: results,
      title: "Halaman Dashboard",
      halaman: "dashboard",
    });
  });
};

// Route untuk mengambil data dalam format JSON
exports.getLatestData = (req, res) => {
  const query = `SELECT 
    suhu_udara.parameter_name AS parameter_suhu, 
    suhu_udara.value AS suhu_terbaru,
    kelembapan_tanah.parameter_name AS parameter_kelembapan, 
    kelembapan_tanah.value AS kelembapan_terbaru,
    COALESCE(penyiraman.jumlah_penyiraman, 0) AS jumlah_penyiraman
  FROM 
    (SELECT parameter_name, value 
     FROM plant_values 
     WHERE id = (SELECT MAX(id) FROM plant_values WHERE parameter_name = 'suhu_udara')
    ) AS suhu_udara
  JOIN 
    (SELECT parameter_name, value 
     FROM plant_values 
     WHERE id = (SELECT MAX(id) FROM plant_values WHERE parameter_name = 'kelembapan_tanah')
    ) AS kelembapan_tanah
  LEFT JOIN 
    (SELECT COUNT(*) AS jumlah_penyiraman 
     FROM plant_values 
     WHERE parameter_name = 'penyiraman_air'
       AND DATE(timestamp) = CURDATE()
    ) AS penyiraman 
  ON 1=1;`;

  con.query(query, (err, results) => {
    if (err) {
      console.log(`Error fetching data : ${err.message}`);
      return res.status(500).json({
        status: false,
        message: "Gagal menangkap data!",
      });
    }

    // Kirim data dalam format JSON
    res.json(results);
  });
};

// const readCSV = async (filePath) => {
//   return new Promise((resolve, reject) => {
//     const results = [];
//     fs.createReadStream(filePath)
//       .pipe(csv())
//       .on("data", (data) => results.push(data))
//       .on("end", () => resolve(results))
//       .on("error", (err) => reject(err));
//   });
// };

// exports.getSuhuUdara = async () => {
//   const filePath = path.join(__dirname, "../data/suhu_udara.csv");
//   const data = await readCSV(filePath);

//   // Ubah format data agar sesuai dengan chart
//   return data.map((row) => ({
//     tanggal: row.tanggal,
//     nilai: parseFloat(row.suhu),
//   }));
// };

// exports.getKelembapanTanah = async () => {
//   const filePath = path.join(__dirname, "../data/kelembapan_tanah.csv");
//   const data = await readCSV(filePath);

//   return data.map((row) => ({
//     tanggal: row.tanggal,
//     nilai: parseFloat(row.kelembapan),
//   }));
// };

// exports.getPenyiramanAir = async () => {
//   const filePath = path.join(__dirname, "../data/penyiraman_air.csv");
//   const data = await readCSV(filePath);

//   return data.map((row) => ({
//     tanggal: row.tanggal,
//     nilai: parseInt(row.penyiraman, 10),
//   }));
// };

// exports.getDataByParameter = (req, res) => {
//   const { parameter } = req.query;  // Ambil parameter dari query string

//   let query = '';
//   if (parameter === 'Suhu Udara') {
//     query = `SELECT tanggal, suhu_terbaru AS nilai FROM plant_values WHERE parameter_name = 'suhu_udara' ORDER BY tanggal DESC`;
//   } else if (parameter === 'Kelembapan Tanah') {
//     query = `SELECT tanggal, kelembapan_terbaru AS nilai FROM plant_values WHERE parameter_name = 'kelembapan_tanah' ORDER BY tanggal DESC`;
//   } else if (parameter === 'Total Penyiraman') {
//     query = `SELECT tanggal, jumlah_penyiraman AS nilai FROM plant_values WHERE parameter_name = 'penyiraman_air' ORDER BY tanggal DESC`;
//   }

//   con.query(query, (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: 'Error fetching data' });
//     }
//     res.json(results); // Kirim data dalam format JSON
//   });
// };
