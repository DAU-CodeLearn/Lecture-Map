const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/api/authRoutes');
const lectureRoutes = require('./routes/api/lectureRoutes');
//const classroomRoutes = require('./routes/classroomRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// 미들웨어 설정
app.use(cors());
app.use(express.json());


// 라우트 설정
app.use('/api/auth',authRoutes);
app.use('/api/lecture',lectureRoutes);
//app.use('/api/classrooms', classroomRoutes);

// 엔드포인트 추가
app.post('/login', authRoutes);
app.post('/register', authRoutes);
app.post('/checkId', authRoutes);
app.post('/lectures', lectureRoutes);
app.post('/classroom', lectureRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
