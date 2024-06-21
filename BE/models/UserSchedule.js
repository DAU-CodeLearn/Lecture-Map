// BE/models/user.js
const { resolve } = require('path');
const connection = require('../config/mapConnect');
const bcrypt = require('bcryptjs');

class UserSchedule {
    /* user_id를 이용해 스케줄 정보 추출 */
    static async mySchedule(userId){
        return new Promise(async (resolve, reject) => {
            const { id } = userId;
            console.log(`id: ${id}`);
            const query = 'SELECT lec.* FROM userschedule AS us JOIN lecture AS lec ON us.lecture_PK = lec.lecture_PK WHERE us.user_id = ?';
            connection.query(query, [id], (err, results) => {
                if(err){
                    return reject(err);
                }
                resolve(results);
            });
        });
    }  

    /** 유저 정보와 강의정보를 이용해 중복확인 */
    static async myScheduleCheck(userLectureInfo){
        return new Promise(async (resolve, reject) => {
            console.log(`Data: ${JSON.stringify(userLectureInfo)}`);
            const { id, lecturePK } = userLectureInfo;
            console.log(id); console.log(lecturePK);
            console.log(`myScheduleCheck  ID: ${id},  lecturePK: ${lecturePK}`);
            const query = 'SELECT * FROM userschedule WHERE user_id = ? AND lecture_PK = ?';
            connection.query(query, [id, lecturePK], (err,results) => {
                if(err) return reject(err);
                console.log("유저 스케줄 중복 없음");
                resolve(1);
            });
        });
    }

    /** 유저 강의 정보 저장 */
    static async insertMySchedule(userLectureInfo){
        return new Promise(async (resolve, reject) => {
            const { id, lecturePK } = userLectureInfo;
            console.log(`insertMySchedule  ID: ${id},  lecturePK: ${lecturePK}`);
            const query = 'INSERT INTO userschedule (user_id, lecture_PK) VALUES (?, ?)';
            connection.query(query, [id, lecturePK], (err,results) => {
                if(err) return reject(err);
                console.log("유저 스케줄 삽입 성공");
                resolve(results);
            });
        });
    }

    /** 유저 강의 정보 삭제 */
    static async deleteMySchedule(userLectureInfo){
        return new Promise(async (resolve, reject) => {
            const { id, lecturePK } = userLectureInfo;
            console.log(`insertMySchedule  ID: ${id},  lecturePK: ${lecturePK}`);
            const query = 'DELECT FROM userschedule WHERE user_id = ? AND lecture_PK = ?';
            connection.query(query, [id, lecturePK], (err, results) => {
                if(err) return reject(err);
                console.log("유저 스케줄 삭제 완료");
                resolve(results);
            });
        });
    }
}

module.exports = UserSchedule;
