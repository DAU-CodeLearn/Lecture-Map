// BE/routes/api/authRoutes.js
const express = require('express');
const router = express.Router();
const lectureController = require('../../controllers/lectureController');

router.post('/lectures', lectureController.loadLecture);
router.post('/classroom', lectureController.classroomLecture);
router.post('/classroomfloor', lectureController.classroomLectureFloor);
router.post('/classroomtime', lectureController.classroomLectureTime);
router.post('/classrommweek', lectureController.classroomLectureWeek);

module.exports = router;
