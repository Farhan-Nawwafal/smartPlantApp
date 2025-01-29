const express = require('express');
const { getAllDatas } = require('../controllers/getsDataController');
const router = express.Router();

// MANGAMBIL DATA DI CONTROLLER
const test = require('../controllers/getsDataController');
const { postSuhuUdara, postKelembapanTanah, postPenyiramanAir } = require('../controllers/postsDataController');

// CREATE ENDPOINT FOR GET DATA START
router.get('/getPlantValue', test.getAllDatas);
// router.get('/getPlantValue/kelembapanTanah', getKelembapanTanah);
// router.get('/getPlantValue/penyiramanAir', getPenyiramanAir);
// CREATE ENDPOINT FOR GET DATA END

// CREATE ENDPOINT FOR POST DATA START
router.post('/postPlantValue/suhuUdara', postSuhuUdara);
router.post('/postPlantValue/kelembapanTanah', postKelembapanTanah);
router.post('/postPlantValue/penyiramanAir', postPenyiramanAir);
// CREATE ENDPOINT FOR POST DATA END

module.exports = router;