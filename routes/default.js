const express = require('express');
const router = express.Router();

// GET Home PAGE
router.get('/', (req, res, next) => {
    res.render('default', {
        css: '', // untuk pengaturan css
        html: '',
        title: 'Page Not Found!',
        layout: 'layouts/main',
    });
});

module.exports = router;