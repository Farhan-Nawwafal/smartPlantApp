const express = require('express');
const router = express.Router();

const identities = [
    {
        name: 'farhan',
        fullName: 'Farhan Nawwafal P.',
        nim: 10123470,
        role: 'Back End',
    },

    {
        name: 'zaidan',
        fullName: 'M. Zaidan Azhari',
        nim: 10123136,
        role: 'UI/UX',
    },
    
    {
        name: 'yogi',
        fullName: 'M. Yogi Ady P.',
        nim: 10123170,
        role: 'UI/UX',
    },

    {
        name: 'aldo',
        fullName: 'Aldo Revaldo',
        nim: 10123163,
        role: 'IoT',
    },

    {
        name: 'bagas',
        fullName: 'M. Lutfi Bagaskara',
        nim: 10123147,
        role: 'Front End',
    },

    {
        name: 'delia',
        fullName: 'Delia Aksani P.',
        nim: 10123156,
        role: 'Front End',
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