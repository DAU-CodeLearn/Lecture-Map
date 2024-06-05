const { stringify } = require('querystring');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const Lecture = require('../models/Lecture');

const JWT_SECRET = "your_secret_key";  // 일관된 비밀 키 사용

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

    res.status(201).json({ message: 'login success' });
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
    const token = jwt.sign({id: user.user_id, name: user.username }, JWT_SECRET, {
      expiresIn: '1h'
    });
    const decoded = jwt.verify(token, JWT_SECRET);  // 올바르게 토큰을 검증
    console.log(decoded);
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

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


const getTimetable = async (req, res) => {
  const { lecture_room } = req.body;
  console.log(lecture_room);
  try {
    const timetable = await Lecture.find(lecture_room);
    if (!timetable.length) {
      return res.status(404).json({ message: 'No lectures found for the given room' });
    }
    res.status(200).json(timetable);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  registerUser,
  loginUser,
  checkId,
  getTimetable
};
