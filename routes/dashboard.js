const express = require("express");
const router = express.Router();
const getDataController = require("../controllers/getsDataController");

router.get('/', getDataController.getAllDatas);

// Route baru untuk mengambil data dalam format JSON
router.get('/getLatestData', getDataController.getLatestData);

// Route baru untuk mengambil data dalam format JSON

module.exports = router;
