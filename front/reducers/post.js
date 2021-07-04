const dummyPost = {
    id: 2,
    content: 'hello world #posting_test',
    User: {
        id: 1,
        nickname: 'terecal',
    },
    Images: [{ src: "https://image.shutterstock.com/image-photo/odaiba-japan-10-january-2016-600w-687132658.jpg" }],
    Comments: [],
};


export const initialState = {
    mainPosts: [
        {
            id: 1,
            User: {
                id: 1,
                nickname: 'terecal',
            },
            content: 'sample 게시글 #test',
            Images: [{
                src: 'https://image.shutterstock.com/image-vector/sample-red-square-grunge-stamp-260nw-338250266.jpg',
            }, {
                src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
            }, {
                src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
            }],
            Comments: [{
                User: {
                    nickname: 'nero',
                },
                content: '첫번째 더미 댓글 fisrt ',
            }, {
                User: {
                    nickname: 'hero',
                },
                content: '두번째 더미 댓글 second',
            }]
        },
    ],
};

export const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        }

        default:
            return state;
    }
};

export default reducer;
