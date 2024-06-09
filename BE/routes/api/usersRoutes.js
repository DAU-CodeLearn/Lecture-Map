// BE/routes/api/usersRoutes.js
const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/usersController');

router.post('/register', usersController.registerUser);
router.post('/login', usersController.loginUser);
router.post('/checkId', usersController.checkId);
router.post('/changePW', usersController.changePassword);

module.exports = router;
