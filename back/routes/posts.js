const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // db에서 포스팅 정보 읽어 오기

    // 포스팅 가데이터 응답 설정
    res.json(
        {
            id: 1,
            User: {
                id: 1,
                nickname: "hyun",
            },
            content: "게시글 test 11",
            Images: [{
                src: "https://image.shutterstock.com/image-vector/sample-red-square-grunge-stamp-260nw-338250266.jpg",
            }],
            Commeents: [{
                User: {
                    id: 1,
                    nickname: "hyun",
                },
                content: "댓글 test 11",
            }],
        }
    )
});

module.exports = router;