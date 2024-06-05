// BE/controllers/lectureController.js
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

module.exports = {
    loadLecture
};