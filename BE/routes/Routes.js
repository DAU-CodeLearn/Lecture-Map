const express = require('express');
const router = express.Router();
const { getEmptyClassrooms } = require('../controllers/classroomController');

router.get('/', getEmptyClassrooms);

module.exports = router;
