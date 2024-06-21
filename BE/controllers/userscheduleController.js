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
    console.log(`id: ${id}, lectureCode: ${lectureCode}, lectureID: ${lectureId}`);
    try{
        const lecturePK = await Lecture.findLecture_code({ lectureCode, lectureId });
        if(!lecturePK){
            return res.status(400).json({ message: 'No Lecture Info' });
        }
        console.log(`lecturePK: ${lecturePK}`);
        const userLecture = await UserSchedule.myScheduleCheck({ id, lecturePK });
        console.log(userLecture);
        if(userLecture !== 1){
            console.log("실패실패");
            return res.status(400).json({ message: 'Lecture already exists' });
        }
        const userSchedule = await UserSchedule.insertMySchedule({ id, lecturePK });
        res.status(201).json({messae: "User Schedule upload success"});
    } catch(err){
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    loadUserSchedule,
    insertUserSchedule
};