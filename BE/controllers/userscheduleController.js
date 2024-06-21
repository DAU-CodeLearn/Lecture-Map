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
        const lecturePKs = await Lecture.findLecture_code({ lectureCode, lectureId });
        if(!lecturePKs || lecturePKs.length === 0){
            return res.status(400).json({ message: 'No Lecture Info' });
        }
        for(const lecture of lecturePKs){
            const lecturePK = lecture.lecture_PK;
            const userLecture = await UserSchedule.myScheduleCheck({ id, lecturePK });
            if(userLecture !== 1){
                return res.status(400).json({ message: 'Lecture already exists' });
            }
            await UserSchedule.insertMySchedule({ id, lecturePK });
        }
        res.status(201).json({messae: "User Schedule upload success"});
    } catch(err){
        res.status(500).json({ error: err.message });
    }
};

const deleteUserSchedule = async (req, res) => {
    const { id, lectureCode, lectureId } = req.body;
    try{
        const lecturePKs = await Lecture.findLecture_code({ lectureCode, lectureId });
        if(!lecturePKs || lecturePKs.length === 0){
            return res.status(400).json({ message: 'No Lecture Info' });
        }
        for(const lecture of lecturePKs){
            const lecturePK = lecture.lecture_PK;
            const userLecture = await UserSchedule.myScheduleCheck({ id, lecturePK });
            if(userLecture !== 1){
                return res.status(400).json({ message: 'Lecture already exists' });
            }
            await UserSchedule.deleteMySchedule({ id, lecturePK });
        }
        
        res.status(201).json({messae: "User Schedule delete success"});
    } catch(err){
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    loadUserSchedule,
    insertUserSchedule,
    deleteUserSchedule
};