// controllers/authController.js
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // 사용자 중복 확인
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // 새로운 사용자 생성
    const user = await User.create({ username, password });

    // JWT 토큰 생성
    const token = jwt.sign({ user_id: user.user_id, username: user.username }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // 사용자 확인
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // 비밀번호 일치 확인
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // JWT 토큰 생성
    const token = jwt.sign({ user_id: user.user_id, username: user.username }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  registerUser,
  loginUser
};
