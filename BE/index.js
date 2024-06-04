const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/api/authRoutes.js');
//const classroomRoutes = require('./routes/classroomRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// 미들웨어 설정
app.use(express.json());

// 라우트 설정
app.use('/api/auth',authRoutes);
//app.use('/api/classrooms', classroomRoutes);

// /login 엔드포인트 추가
app.post('/login', authRoutes);

// /register 엔드포인트 추가
app.post('/register', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
