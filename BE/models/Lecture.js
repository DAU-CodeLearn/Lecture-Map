// BE/models/lecture.js
const { resolve } = require('path');
const connection = require('../config/mapConnect');
const bcrypt = require('bcryptjs');

class Lecture {
    static padLectureId(id){ return id.toString().padStart(3, '0'); }

    static padLectureRoom(room){ return room.toString().padStart(4, '0'); }

    /* 모든 강의 시간표 호출 */
    static async findAll(whereClause){
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM lecture';
            connection.query(query, (err, results) => {
                if(err) return reject(err);
                resolve(results);
            });
        });
    }

    /* 건물번호 방번호를 지정해서 시간표 호출 */
    static async findRoom(roomData){
        return new Promise(async (resolve, reject) => {
            const { build, roomNum } = roomData;
            const paddedRoomNum = Lecture.padLectureRoom(roomNum);
            const query = 'SELECT * FROM lecture WHERE building = ? AND lecture_room = ?';
            connection.query(query, [build, paddedRoomNum], (err, results) => {
                if(err) return reject(err);
                resolve(results);
            });
        });
    }

    /* 건물번호와 층수만을 이용해 시간표 호출 */
    static async findRoom_floor(roomData){
        return new Promise(async (resolve, reject) => {
            const { build, floor } = roomData;
            const query = 'SELECT * FROM lecture WHERE building = ? AND lecture_floor = ?';
            connection.query(query, [build, floor], (err, results) => {
                if(err) return reject(err);
                resolve(results);
            });
        });
    }

    /* 건물번호 층수 요일 시작시간을 이용해 시간표 호출 */
    static async findRoom_time(roomData) {
        return new Promise(async (resolve, reject) => {
            const { build, floor, week, time } = roomData;
            const query = 'SELECT * FROM lecture WHERE building = ? AND lecture_floor = ? AND week = ? AND ? BETWEEN lecture_start AND lecture_end';
            connection.query(query, [build, floor, week, time], (err, results) => {
                if(err) return reject(err);
                resolve(results);
            });
        });
    }

    /* 건물번호 방번호 요일을 지정해서 시간표 호출 */
    static async findRoom_week(roomData){
        return new Promise(async (resolve, reject) => {
            const { build, roomNum, week } = roomData;
            const paddedRoomNum = Lecture.padLectureRoom(roomNum);
            const query = 'SELECT * FROM lecture WHERE building = ? AND lecture_room = ? AND week = ?';
            connection.query(query, [build, paddedRoomNum, week], (err, results) => {
                if(err) return reject(err);
                resolve(results);
            });
        });
    }

    /** 강의코드 분반으로 강의 가져오기 */
    static async findLecture_code(lectureInfo) {
        return new Promise((resolve, reject) => {
            const { lectureCode, lectureId } = lectureInfo;
            const paddedLectureId = Lecture.padLectureId(lectureId);
            const query = 'SELECT lecture_PK FROM lecture WHERE lecture_code = ? AND lecture_id = ?';
            connection.query(query, [lectureCode, paddedLectureId], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    }
    

    /** 강의 찾기 */
    static async findLecture(lectureInfo){
        return new Promise(async (resolve, reject) => {
            const { building, lectureFloor, lectureRoom, lectureCode, lectureId, lectureName, week, lectureStart, lectureEnd } = lectureInfo;
            const paddedLectureId = Lecture.padLectureId(lectureId);
            const paddedLectureRoom = Lecture.padLectureRoom(lectureRoom);
            const query = 'SELECT lecture_PK FROM lecture WHERE lecture_code = ? AND lecture_id = ? AND lecturename = ? AND building = ? AND lecture_room = ? AND lecture_floor = ? AND week = ? AND lecture_start = ? AND lecture_end = ?';
            connection.query(query, [lectureCode, paddedLectureId, lectureName, building, paddedLectureRoom, lectureFloor, week, lectureStart, lectureEnd], (err, results) => {
                if(err){
                    console.log('Query Error');
                    return reject(err);
                }
                resolve(results);
            });
        });
    }

    /** 강의 추가 */
    static async insertLecture(lectureInfo){
        return new Promise(async (resolve, reject) => {
            const { building, lectureFloor, lectureRoom, lectureCode, lectureId, lectureName, week, lectureStart, lectureEnd } = lectureInfo;
            const paddedLectureId = Lecture.padLectureId(lectureId);
            const paddedLectureRoom = Lecture.padLectureRoom(lectureRoom);
            const query = 'INSERT INTO lecture (lecture_code, lecture_id, lecturename, building, lecture_room, lecture_floor, week, lecture_start, lecture_end) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
            connection.query(query, [lectureCode, paddedLectureId, lectureName, building, paddedLectureRoom, lectureFloor, week, lectureStart, lectureEnd], (err, results) => {
                if(err){
                    console.log('Query Error');
                    return reject(err);
                }
                resolve(results);
            });
        });
    }

    /** 강의 삭제 */
    static async deleteLecture(lectureInfo){
        return new Promise(async (resolve, reject) => {
            const { building, lectureFloor, lectureCode, lectureId, lectureRoom } = lectureInfo;
            const paddedLectureId = Lecture.padLectureId(lectureId);
            const paddedLectureRoom = Lecture.padLectureRoom(lectureRoom);
            const query = 'DELETE FROM lecture WHERE building = ? AND lecture_floor = ? AND lecture_code = ? AND lecture_id = ? AND lecture_room = ?';
            connection.query(query, [building, lectureFloor, lectureCode, paddedLectureId, paddedLectureRoom], (err, results) => {
                if(err) return reject(err);
                resolve(1);
            });
        });
    }
}

module.exports = Lecture;
