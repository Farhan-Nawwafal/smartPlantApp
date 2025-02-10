const express = require('express');
const router = express.Router();

// MENGAMBIL DATA DI CONTROLLER
const getPostsController = require('../controllers/postsDataController');
const iotDataController = require('../controllers/iotDataController');

// CREATE ENDPOINT FOR POST DATA START
router.post('/postPlantValue/suhuUdara', getPostsController.postSuhuUdara);
router.post('/postPlantValue/kelembapanTanah', getPostsController.postKelembapanTanah);
// router.post('/postPlantValue/penyiramanAir', getPostsController.postPenyiramanAir);
// CREATE ENDPOINT FOR POST DATA END
router.get('/status', iotDataController.postStatusData);
router.post('/sensor', iotDataController.getSensorData);
router.post('/watering', iotDataController.postPenyiraman);

module.exports = router;