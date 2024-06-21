// BE/routes/api/userscheduleRoutes.js
const express = require('express');
const router = express.Router();
const userscheduleController = require('../../controllers/userscheduleController');

router.post('/myschedule', userscheduleController.loadUserSchedule);
router.post('/insertuserschedule', userscheduleController.insertUserSchedule);
module.exports = router;
