const connection = require('../config/db.js');

class Lecture {
  static async findAllByRoom(lecture_room) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM lecture WHERE lecture_room = ?';
      connection.query(query, [lecture_room], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  }

  static async create(lectureData) {
    return new Promise((resolve, reject) => {
      const { lecture_id, lecturename, building, lecture_room, week, lecture_start, lecture_end } = lectureData;
      const query = `
        INSERT INTO lecture (lecture_id, lecturename, building, lecture_room, week, lecture_start, lecture_end) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
      connection.query(query, [lecture_id, lecturename, building, lecture_room, week, lecture_start, lecture_end], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  }

  static async find(lecture_room) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM lecture WHERE lecture_room = ?';
      connection.query(query, [lecture_room], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  }
}

module.exports = Lecture;
