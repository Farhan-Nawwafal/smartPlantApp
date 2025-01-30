const express = require('express');
const router = express.Router();

// MANGAMBIL DATA DI CONTROLLER
const getPostsController = require('../controllers/postsDataController');

// CREATE ENDPOINT FOR GET DATA START
// router.get('/getPlantValue', test.getAllDatas);
// router.get('/getPlantValue/kelembapanTanah', getKelembapanTanah);
// router.get('/getPlantValue/penyiramanAir', getPenyiramanAir);
// CREATE ENDPOINT FOR GET DATA END

// CREATE ENDPOINT FOR POST DATA START
router.post('/postPlantValue/suhuUdara', getPostsController.postSuhuUdara);
router.post('/postPlantValue/kelembapanTanah', getPostsController.postKelembapanTanah);
router.post('/postPlantValue/penyiramanAir', getPostsController.postPenyiramanAir);
// CREATE ENDPOINT FOR POST DATA END

module.exports = router;