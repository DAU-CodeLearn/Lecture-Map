const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const usersRoutes = require('./routes/api/usersRoutes');
const lectureRoutes = require('./routes/api/lectureRoutes');
const userscheduleRoutes = require('./routes/api/userscheduleRoutes');
//const classroomRoutes = require('./routes/classroomRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// 미들웨어 설정
app.use(cors());
app.use(express.json());


// 라우트 설정
app.use('/api/users',usersRoutes);
app.use('/api/lecture',lectureRoutes);
app.use('/api/userschedule',userscheduleRoutes);

// 엔드포인트 추가
app.post('/login', usersRoutes);
app.post('/register', usersRoutes);
app.post('/checkId', usersRoutes);
app.post('/changePW', usersRoutes);

app.post('/lectures', lectureRoutes);
app.post('/classroom', lectureRoutes);
app.post('/classroomfloor', lectureRoutes);
app.post('/classroomtime', lectureRoutes);
app.post('/classroomweek', lectureRoutes);

app.post('/myschedule', userscheduleRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
