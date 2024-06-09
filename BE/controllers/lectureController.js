// BE/controllers/lectureController.js
const { start } = require('repl');
const Lecture = require('../models/Lecture');

const loadLecture = async (req, res) => {
    try{
        const lecture = await Lecture.findAll();
        if(!lecture.length){
            return res.status(404).json({ message: 'No lectures found' });
        }

        res.status(200).json({ lecture });
    } catch(err){
        res.status(500).json({ error: err.message });
    }
};

const classroomLecture = async (req, res) => {
    const { build, roomNum } = req.body;

    try{
        const lectures = await Lecture.findRoom({ build, roomNum });
        if(!lectures.length){
            return res.status(404).json({ message: 'No lectures found in', build, roomNum });
        }

        res.status(200).json({ lectures });
    } catch(err){
        res.status(500).json({ error: err.message });
    }
};

const classroomLectureFloor = async (req, res) => {
    const { build, floor } = req.body;
    try{
        const lectures = await Lecture.findRoom_floor({ build, floor });
        if(!lectures.length){
            return res.status(404).json({ message: 'No lectures found in', build, floor });
        }
        res.status(200).json({ lectures });
    } catch(err){
        res.status(500).json({ error: err.message });
    }
};

const classroomLectureTime = async (req, res) => {
    const { build, floor, week, startTime } = req.body;
    try{
        const lectures = await Lecture.findRoom_time({ build, floor, week, startTime });
        if(!lectures.length){
            return res.status(404).json({ message: 'No lectures found in ', build, floor, week, startTime });
        }
        res.status(200).json({ lectures });
    } catch(err){
        res.status(500).json({ error: err.message });
    }
};

const classroomLectureWeek = async (req, res) => {
    const { build, roomNum, week } = req.body;

    try{
        const lectures = await Lecture.findRoom({ build, roomNum, week });
        if(!lectures.length){
            return res.status(404).json({ message: 'No lectures found in', build, roomNum, week});
        }

        res.status(200).json({ lectures });
    } catch(err){
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    loadLecture,
    classroomLecture,
    classroomLectureFloor,
    classroomLectureTime,
    classroomLectureWeek
};