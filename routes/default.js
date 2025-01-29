const express = require('express');
const router = express.Router();

// GET Home PAGE
router.get('/', (req, res, next) => {
    res.render('default', {
        layout: 'layouts/main',
        title: 'Page Not Found!',
        css: '', // untuk pengaturan css
    });
});

module.exports = router;