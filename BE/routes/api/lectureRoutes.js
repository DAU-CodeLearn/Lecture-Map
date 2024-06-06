// BE/routes/api/authRoutes.js
const express = require('express');
const router = express.Router();
const lectureController = require('../../controllers/lectureController');

router.post('/lectures', lectureController.loadLecture);
router.post('/classroom', lectureController.classroomLecture);

module.exports = router;
