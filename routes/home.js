const express = require('express');
const router = express.Router();

// GET Home PAGE
router.get('/', (req, res, next) => {
    res.render('home', {
        css: 'home', // untuk pengaturan css
        html: 'home',
        title: 'Halaman Home',
        // Relative terhadap views dan kasih tau kalo about pake layouts yg utama (main)
        layout: 'layouts/main', 
    });
});

module.exports = router;