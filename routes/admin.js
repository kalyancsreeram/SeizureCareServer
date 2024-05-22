const express = require('express');
const router = express.Router();

router.get('/admin', (req, res, next) => {
    res.send('Hello from admin');
});

router.get('/add-product', (req, res, next) => {
    res.send('Hello from /add-product');
});

module.exports = router;