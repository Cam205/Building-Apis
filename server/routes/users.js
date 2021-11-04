const express = require('express');
const chirpStore = require('../chirpstore.js');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('users');
});





module.exports = router;