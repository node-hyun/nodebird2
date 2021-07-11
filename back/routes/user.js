const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { User, Post } = require('../models');
const passport = require('passport');


// 유저 정보 가져 오기 
router.get('/', async (req, res, next) => { // GET /user
    try {
        if (req.user) {
            const fullUserWithoutPassword = await User.findOne({
                where: { id: req.user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followers',
                    attributes: ['id'],
                }]
            })
            res.status(200).json(fullUserWithoutPassword);
        } else {
            res.status(200).json(null);
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
});



// 로그아웃
router.post('/logout', (req, res, next) => {
    console.log("logout router 실행");
    req.logout();
    req.session.destroy();
    console.log("logout check");
    res.send('ok')
})


// 로그인 라우터
// 로그인 라우터
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => {
            if (loginErr) {
                console.error(loginErr);
                return next(loginErr);
            }
            console.log("반환할 id ::::::::::::::::::: ", user);
            const fullUserWithoutPassword = await User.findOne({
                where: { id: user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followers',
                    attributes: ['id'],
                }]
            })
            console.log("fullUserWithoutPassword : ", fullUserWithoutPassword);
            return res.status(200).json(fullUserWithoutPassword); // 성공 응답 코드와 함께 유저 정보를 응답
        });
    })(req, res, next);
});


// /user
router.post('/', async (req, res) => {
    console.log("req.body : ", req.body);

    try {
        const exUser = await User.findOne({
            where: {
                email: req.body.email,
            }
        })
        if (exUser) {
            return res.status(403).send('이미 사용중인 아이디에요')
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);

        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword
        })
        res.status(201).send('회원 가입 success but 비밀번호 암호화 x')

    } catch (err) {
        console.error(error);
        next(error);
    }

});


module.exports = router;
