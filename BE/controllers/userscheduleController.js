// BE/controllers/userscheduleController.js
const UserSchedule = require('../models/UserSchedule');

const loadUserSchedule = async (req, res) => {
    const { id } = req.body;

    try{
        const lecture = await UserSchedule.mySchedule({ id });
        if(!lecture.length){
            return res.status(404).json({ message: 'No lectures found in', id });
        }
        console.log("success");
        res.status(200).json({ lecture });
    } catch(err){
        console.log("fail");
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    loadUserSchedule
};