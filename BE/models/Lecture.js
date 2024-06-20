// BE/models/lecture.js
const { resolve } = require('path');
const connection = require('../config/mapConnect');
const bcrypt = require('bcryptjs');

class Lecture {
    /* 모든 강의 시간표 호출 */
    static async findAll(whereClause){
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM lecture';
            connection.query(query, (err, results) => {
                if(err){
                    return reject(err);
                }
                resolve(results);
            });
        });
    }
    /* 건물번호 방번호를 지정해서 시간표 호출 */
    static async findRoom(roomData){
        return new Promise(async (resolve, reject) => {
            const { build, roomNum } = roomData;
            const query = 'SELECT * FROM lecture WHERE building = ? AND lecture_room = ?';
            connection.query(query, [build, roomNum], (err, results) => {
                if(err){
                    return reject(err);
                }
                resolve(results);
            });
        });
    }
    /* 건물번호와 층수만을 이용해 시간표 호출 */
    static async findRoom_floor(roomData){
        return new Promise(async (resolve, reject) => {
            const { build, floor } = roomData;
            const query = 'SELECT * FROM lecture WHERE building = ? AND lecture_floor = ?'
            connection.query(query, [build, floor], (err, results) => {
                if(err){
                    return reject(err);
                }
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
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    }
     /* 건물번호 방번호 요일을 지정해서 시간표 호출 */
     static async findRoom_week(roomData){
        return new Promise(async (resolve, reject) => {
            const { build, roomNum, week } = roomData;
            const query = 'SELECT * FROM lecture WHERE building = ? AND lecture_room = ? AND week = ?';
            connection.query(query, [build, roomNum, week], (err, results) => {
                if(err){
                    return reject(err);
                }
                resolve(results);
            });
        });
    }
}

module.exports = Lecture;