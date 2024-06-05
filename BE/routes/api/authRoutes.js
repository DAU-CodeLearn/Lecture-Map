// BE/routes/api/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController.js');

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.post('/checkId', authController.checkId);
router.post('/getTimetable', authController.getTimetable);

module.exports = router;
