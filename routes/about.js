const express = require('express');
const router = express.Router();

const identities = [
    {
        name: 'bagas',
        fullName: 'Muhammad Lutfi Bagaskara Yodi',
        nim: 10123147,
    },

    {
        name: 'zaidan',
        fullName: 'Muhammad Zaidan Azhari',
        nim: 10123136,
    },

    {
        name: 'delia',
        fullName: 'Delia Aksani Putri',
        nim: 10123156,
    },

    {
        name: 'aldo',
        fullName: 'Aldo Revaldo',
        nim: 10123163,
    },

    {
        name: 'yogi',
        fullName: 'Muhammad Yogi Ady Pratama',
        nim: 10123170,
    },

    {
        name: 'farhan',
        fullName: 'Farhan Nawwafal Pramudia',
        nim: 10123470,
    },
    
]

router.get('/', (req, res, next) => {
    res.render('about', {
        layout: 'layouts/main', 
        identities: identities,
        title: 'Halaman About',
        halaman: 'about',
    });
});

module.exports = router;