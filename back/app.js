const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('./passport');

// const postsRouter = require('./routes/posts');

passportConfig();
dotenv.config();

db.sequelize.sync()
    .then(() => {
        console.log("db 연결 성공");
    })
    .catch("error ::::: ", console.error)

app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 쿠키 설정 등록
app.use(cookieParser(process.env.COOKIE_SECRET));
// 세션 설정 등록
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));

app.use(passport.initialize());
app.use(passport.session());



// 라우터 임포트
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const postsRouter = require('./routes/posts');


app.get('/', (req, res) => {
    res.send("hello express");
});

// 라우터 로직 분기
app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);


app.listen(3065, () => {
    console.log("Ecpress Server is Excuting");
});

