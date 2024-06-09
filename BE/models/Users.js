// BE/models/user.js
const { resolve } = require('path');
const connection = require('../config/mapConnect');
const bcrypt = require('bcryptjs');

class User {
  /** ID를 이용해 회원 정보 가져오기 */
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

  /** 회원 정보를 얻어와 DB에 입력 */
  static async create(userData) {
    return new Promise(async (resolve, reject) => {
      const { studentId, id, password, name } = userData;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      
      const query = 'INSERT INTO users (student_id, user_id, password, username, created_at) VALUES (?, ?, ?, ?, NOW())';
      connection.query(query, [studentId, id, hashedPassword, name], (err, results) => {
        if (err) {
          console.log(`쿼리 오류 : ${studentId} ${id} ${password} ${name}`);
          return reject(err);
        }
        resolve({ studentId, id, name });
      });
    });
  }
 
  /** 입력한 비밀번호와 DB의 비밀번호 일치 확인 */
  static async matchPassword(storedPassword, enteredPassword) {
    return bcrypt.compare(enteredPassword, storedPassword);
  }

  /** user_id를 이용해서 비밀번호를 변경 */
  static async updatePassword(userData){
    return new Promise(async (resolve,reject) => {
      const { id, password } = userData;
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
