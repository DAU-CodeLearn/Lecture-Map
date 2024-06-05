const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/api/authRoutes.js');
//const classroomRoutes = require('./routes/classroomRoutes');

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;

// 미들웨어 설정
app.use(express.json());

// 라우트 설정
app.use('/api/auth',authRoutes);
//app.use('/api/classrooms', classroomRoutes);

// 엔드포인트 추가
app.post('/login', authRoutes);
app.post('/register', authRoutes);
app.post('/checkId', authRoutes);
app.post('/getTimetable', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
