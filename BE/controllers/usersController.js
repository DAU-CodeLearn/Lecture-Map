// BE/controllers/authController.js
const { decodeBase64 } = require('bcryptjs');
const User = require('../models/Users');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  const { studentId, id, password, name } = req.body;

  try {
    // 사용자 중복 확인
    const existingUser = await User.findOne({ id });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    // 새로운 사용자 생성
    const user = await User.create({ studentId, id, password, name });
    res.status(201).json({messae: "Register success"});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { id, password } = req.body;
  
  try {
    // 사용자 확인
    const user = await User.findOne({ id });
    if(!user){
      return res.status(400).json({ message: 'User not found' });
    }
    
    // 비밀번호 일치 확인
    const isMatch = await User.matchPassword(user.password, password);
    if(!isMatch){
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // JWT 토큰 생성
    const token = jwt.sign({ tokenId: user.user_id, tokenName: user.username, tokenStudentId: user.student_id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });
    
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// 토큰을 HTTP헤더에 넣을지 쿠키에 넣을지 정해서 작업을 해야함 (헤더의 경우 클라이언트측에서 쿠키의 경우 서버와 헤더 둘다)

const checkId = async (req, res) => {
  const { id } = req.body;

  try{
    const user = await User.findOne({ id });
    if(user){
      return res.status(401).json({ message: '아이디가 중복입니다. 다른 아이디를 입력해주세요.'});
    }
    res.status(200).json({ message: '사용 가능한 아이디입니다.' });
  } catch(err){
    res.status(500).json({ error: err.message });
  }
};

const changePassword = async (req, res) => {
  const { id, password } = req.body;

  try{
    const result = await User.updatePassword({ id, password });
    console.log(result.message);
  } catch(err){
    console.error('비밀번호 변경 중 오류 발생: ', err);
  }
};

module.exports = {
  registerUser,
  loginUser,
  checkId,
  changePassword
};
