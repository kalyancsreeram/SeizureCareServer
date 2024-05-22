const express = require('express');
const loginController = require('../controllers/loginController');
const router = express.Router();

router.get('/login', loginController.getLoginUser);
router.post('/login', loginController.postLoginUser);

module.exports = router;