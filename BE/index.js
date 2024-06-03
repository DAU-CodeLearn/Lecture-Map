const express = require('express');
const sequelize = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/api/authRoutes.js');
//const classroomRoutes = require('./routes/classroomRoutes');
//const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 미들웨어 설정
app.use(express.json());

// 라우트 설정
app.use('/api/auth',authRoutes);
//app.use('/api/classrooms', classroomRoutes);
//app.use('/api/auth', authRoutes);

// MySQL 연결 및 동기화
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

// /login 엔드포인트 추가
app.post('/login', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
