// BE/models/user.js
const { resolve } = require('path');
const connection = require('../config/mapConnect');
const bcrypt = require('bcryptjs');

class User {
  static async findOne(whereClause) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM users WHERE user_id = ? LIMIT 1';
      connection.query(query, [whereClause.id], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results[0]);
      });
    });
  }

  static async create(userData) {
    return new Promise(async (resolve, reject) => {
      const { studentId, id, password, username } = userData;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      
      const query = 'INSERT INTO users (student_id, user_id, password, username, created_at) VALUES (?, ?, ?, ?, NOW())';
      connection.query(query, [studentId, id, hashedPassword, username], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve({ studentId, id, username });
      });
    });
  }

  static async matchPassword(storedPassword, enteredPassword) {
    return bcrypt.compare(enteredPassword, storedPassword);
  }

  static async updatePassword(userData){
    return new Promise(async (resolve,reject) => {
      const { id, password } = userData;
      console.log(id);
      console.log(password);
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const query = 'UPDATE users SET password = ? WHERE user_id = ?';
      connection.query(query, [hashedPassword, id], (err, results) => {
        if(err){
          return reject(err);
        }
        resolve({ id, message: 'Password updated successfully' });
      });
    });
  }
}

module.exports = User;
