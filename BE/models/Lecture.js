// BE/models/lecture.js
const { resolve } = require('path');
const connection = require('../config/mapConnect');
const bcrypt = require('bcryptjs');
const { rejects } = require('assert');

class Lecture {
    static async findAll(whereClause){
        return new Promise((resolve, rejects) => {
            const query = 'SELECT * FROM lecture';
            connection.query(query, (err, results) => {
                if(err){
                    return rejects(err);
                }
                resolve(results);
            });
        });
    }

    static async findroom(roomData){
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
}

module.exports = Lecture;