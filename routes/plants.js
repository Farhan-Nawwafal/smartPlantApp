const express = require('express');
const router = express.Router();

// MENGAMBIL DATA DI CONTROLLER
const getPostsController = require('../controllers/postsDataController');
const getDatasController = require('../controllers/getsDataController');

// CREATE ENDPOINT FOR GET DATA START
// router.get('/api/data', async (req, res) => {
//     const { parameter } = req.query;
//     try {
//         let data;
//         switch (parameter) {
//             case "Suhu Udara":
//                 data = await getDatasController.getSuhuUdara();
//                 break;
//             case "Kelembapan Tanah":
//                 data = await getDatasController.getKelembapanTanah();
//                 break;
//             case "Total Penyiraman":
//                 data = await getDatasController.getPenyiramanAir();
//                 break;
//             default:
//                 return res.status(400).json({ error: "Parameter tidak valid" });
//         }
//         res.json(data);
//     } catch (error) {
//         res.status(500).json({ error: "Gagal mengambil data" });
//     }
// });
// CREATE ENDPOINT FOR GET DATA END

// CREATE ENDPOINT FOR POST DATA START
router.post('/postPlantValue/suhuUdara', getPostsController.postSuhuUdara);
router.post('/postPlantValue/kelembapanTanah', getPostsController.postKelembapanTanah);
router.post('/postPlantValue/penyiramanAir', getPostsController.postPenyiramanAir);
// CREATE ENDPOINT FOR POST DATA END

module.exports = router;