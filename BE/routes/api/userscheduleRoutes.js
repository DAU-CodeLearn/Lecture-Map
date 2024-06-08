// BE/routes/api/userscheduleRoutes.js
const express = require('express');
const router = express.Router();
const userscheduleController = require('../../controllers/userscheduleController');

router.post('/myschedule', userscheduleController.loadUserSchedule);

module.exports = router;
