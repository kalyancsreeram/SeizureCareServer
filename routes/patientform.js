const express = require('express');
const patientFormController = require('../controllers/patientFormController');
const router = express.Router();

router.post('/patientform', patientFormController.postPatientFormData);

module.exports = router;