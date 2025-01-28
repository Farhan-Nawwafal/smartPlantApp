const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('dashboard', {
        css: 'dashboard', // untuk pengaturan css
        html: 'dashboard',
        title: 'Halaman Dashboard',
        layout: 'layouts/main', 
    });
});

module.exports = router;