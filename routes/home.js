const express = require('express');
const router = express.Router();
// GET Home PAGE
router.get('/', (req, res, next) => {
    res.render('home', {
        // Relative terhadap views dan kasih tau kalo about pake layouts yg utama (main)
        layout: 'layouts/main', 
        title: 'Halaman Home',
        halaman: 'home',
    });
});

module.exports = router;