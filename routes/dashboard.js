const express = require('express');
const router = express.Router();
const getDataController = require('../controllers/getsDataController');

router.get('/', getDataController.getAllDatas);

module.exports = router;