// BE/models/user.js
const { resolve } = require('path');
const connection = require('../config/mapConnect');
const bcrypt = require('bcryptjs');

class UserSchedule {
 /* user_id를 이용해 스케줄 정보 추출 */
 static async mySchedule(userId){
    return new Promise(async (resolve, reject) => {
        const { id } = userId;
        const query = 'SELECT lec.* FROM userschedule AS us JOIN lecture AS lec ON us.lecture_PK = lec.lecture_PK WHERE us.user_id = ?';
        connection.query(query, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            resolve(results);
        });
    });
 }   
}

module.exports = UserSchedule;
