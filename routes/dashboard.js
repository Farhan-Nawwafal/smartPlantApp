const express = require("express");
const router = express.Router();
const getDataController = require("../controllers/getsDataController");

router.get('/', getDataController.getAllDatas);

// Route baru untuk mengambil data dalam format JSON
router.get('/getLatestData', getDataController.getLatestData);

// Route untuk mengambil data berdasarkan parameter
// router.get('/api/data', getDataController.getDataByParameter);


// Route baru untuk mengambil data dalam format JSON

module.exports = router;
