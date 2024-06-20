// BE/controllers/userscheduleController.js
const UserSchedule = require('../models/UserSchedule');
const Lecture = require('../models/Lecture');

const loadUserSchedule = async (req, res) => {
    const { id } = req.body;

    try{
        const lecture = await UserSchedule.mySchedule({ id });
        if(!lecture.length){
            return res.status(404).json({ message: 'No lectures found in', id });
        }

        res.status(200).json({ lecture });
    } catch(err){
        res.status(500).json({ error: err.message });
    }
};

const insertUserSchedule = async (req, res) => {
    const { id, lectureCode, lectureId } = req.body;

    try{
        const lecture = await Lecture.findLecture_code({ lectureCode, lectureId });
        if(!lecture){
            return res.status(400).json({ message: 'No Lecture Info' });
        }
        const userLecture = await UserSchedule.myScheduleCheck({ id, lecture });
        if(userLecture){
            return res.status(400).json({ message: 'Lecture already exists' });
        }
        const userSchedule = await UserSchedule.insertMySchedule({ id, lecture });
        res.status(201).json({messae: "User Schedule upload success"});
    } catch(err){
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    loadUserSchedule
};